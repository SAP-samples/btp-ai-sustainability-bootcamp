# -*- coding: utf-8 -*-
"""
Inference script that extends from the base infer interface
"""

from os.path import exists
from joblib import load
import numpy as np
from flask import Flask, request
import librosa
import logging

from base64 import b64encode
import base64
import io
from json import dumps

import tensorflow as tf
from tensorflow.keras import models



FORMAT = "%(asctime)s:%(name)s:%(levelname)s - %(message)s"
# Use filename="file.log" as a param to logging to log to a file
logging.basicConfig(format=FORMAT, level=logging.INFO)

app = Flask(__name__)

sound_pipeline, target_classes = None, None

@app.before_first_request
def init():
    """
    Load the model if it is available locally
    """
    global sound_pipeline, target_classes
    path = "/mnt/models"
    model_name = "sound_classifier.pkl"

    if exists(f"{path}/{model_name}"):
        print(f"Loading classifier pipeline from {path}")
        with open(f"{path}/{model_name}", "rb") as handle:
            [sound_pipeline, target_classes] = load(handle)
            print("Model loaded successfully")
    else:
        raise FileNotFoundError(f"{path}/{model_name}")

    return None


def acoustic_feature_computation(clip):
    mel_spectrogram = librosa.feature.melspectrogram(
        y = clip, 
        sr = 22050, 
        hop_length = 512,
        n_mels = 64,
        fmax = 22050/2
        )
    log_mel = librosa.power_to_db(mel_spectrogram)
    log_mel_spectrogram = librosa.power_to_db(mel_spectrogram)
    MFCCs = librosa.feature.mfcc(y = clip, sr = 22050, n_mfcc = 40, fmax = 22050/2)
    acoustic_features = np.concatenate((MFCCs,log_mel_spectrogram), axis = 0)
    return acoustic_features


@app.route("/v1/models/{}:predict".format("soundmodel"), methods=["POST"])
def predict():
    """
    Perform an inference on the model created in initialize

    Returns:
        String prediction of the label for the given test data
    """

    global sound_pipeline, target_classes
    input_data = dict(request.json)

    wave_file_as_binary = base64.b64decode(input_data['sound'])
    data, samplerate = librosa.load(io.BytesIO(wave_file_as_binary))
    x_inference = acoustic_feature_computation(data)
    b = np.array([np.array(x_inference)])

    prediction = sound_pipeline.predict(b)
    prediction = prediction[0]
    
    pred_class =  np.where(prediction == np.amax(prediction))[0][0] 
    predicted_label = target_classes[pred_class]  
    pred_confidence = np.max(prediction) 
    
    L={'anomaly1':'Slow Sound',
       'anomaly2':'Damage Noise',
       'ok':'ok'}
    
    output = { L[predicted_label]: str(pred_confidence)}

    return output


if __name__ == "__main__":
    init()
    app.run(host="0.0.0.0", debug=True, port=9001)

