# -*- coding: utf-8 -*-
"""
Inference script that extends from the base infer interface
"""

from os.path import exists
from joblib import load
import numpy as np
from flask import Flask, request
import librosa
import librosa.display
import wave

app = Flask(__name__)

sound_pipeline, target_classes = None, None

def acoustic_feature_computation( clip ):
    scale, sr = librosa.load(clip)
    mel_spectrogram = librosa.feature.melspectrogram(scale, 
                                                 sr, 
                                                 hop_length=512,
                                                 n_mels=64,
                                                 fmax=sr/2)
    log_mel = librosa.power_to_db(mel_spectrogram)
    MFCCs=librosa.feature.mfcc(scale, sr, n_mfcc=40, fmax=sr/2)
    acoustic_features=np.concatenate( (MFCCs,log_mel_spectrogram), axis =0)
    return acoustic_features

@app.before_first_request
def init():
    """
    Load the model if it is available locally
    """
    global sound_pipeline, target_classes
    path = "/mnt/models"
    model_name = "ssound_classifier.pkl"

    if exists(f"{path}/{model_name}"):
        print(f"Loading classifier pipeline from {path}")
        with open(f"{path}/{model_name}", "rb") as handle:
            [sound_pipeline, target_classes] = load(handle)
            print("Model loaded successfully")
    else:
        raise FileNotFoundError(f"{path}/{model_name}")

    return None


@app.route("/v1/models/{}:predict".format("soundmodel"), methods=["POST"])
def predict():
    """
    Perform an inference on the model created in initialize

    Returns:
        String prediction of the label for the given test data
    """

    global sound_pipeline, target_classes
    input_data = dict(request.json)

    acoustic_features = prepare_data(input_data)
    input_data = input_data["sound"]
    input_data = np.frombuffer(input_data, count = 33075, dtype = np.float32)

    prediction = sound_pipeline.predict([input_data])
    predicted_label = "Anomalous" if prediction[0] > 0.5 else "Normal" #To be tuned
    #predicted_label = target_classes[prediction[0]]
    output = {"predictions": predicted_label}

    return output


if __name__ == "__main__":
    init()
    app.run(host="0.0.0.0", debug=True, port=9001)

