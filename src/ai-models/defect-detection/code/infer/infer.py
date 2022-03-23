# -*- coding: utf-8 -*-
"""
Inference script that extends from the base infer interface
"""

from os.path import exists
from joblib import load
import numpy as np
from flask import Flask, request

from base64 import b64encode
import base64
import io
from json import dumps
import cv2

app = Flask(__name__)

image_pipeline, target_classes = None, None

@app.before_first_request
def init():
    """
    Load the model if it is available locally
    """
    global image_pipeline, target_classes
    path = "/mnt/models"
    model_name = "classifier_pipeline.pkl"

    if exists(f"{path}/{model_name}"):
        print(f"Loading classifier pipeline from {path}")
        with open(f"{path}/{model_name}", "rb") as handle:
            [image_pipeline, target_classes] = load(handle)
            print("Model loaded successfully")
    else:
        raise FileNotFoundError(f"{path}/{model_name}")

    return None


def load_image(data):
    IMG_WIDTH=224
    IMG_HEIGHT=224
    image = cv2.imdecode(data, cv2.IMREAD_COLOR)
    image = cv2.resize(image, (IMG_HEIGHT, IMG_WIDTH),interpolation = cv2.INTER_AREA)
    image = np.array(image)
    image = image.astype('float32')
    image /= 255
    return image


@app.route("/v1/models/{}:predict".format("imagemodel"), methods=["POST"])
def predict():
    """
    Perform an inference on the model created in initialize

    Returns:
        String prediction of the label for the given test data
    """

    global image_pipeline, target_classes
    input_data = dict(request.json)

    image_file_as_binary = base64.b64decode(input_data['image'])
    nparr = np.frombuffer(image_file_as_binary, np.uint8)
    x_inference = load_image(nparr)
    b = np.array([np.array(x_inference)])

    prediction = image_pipeline.predict(b)
    predicted_output = prediction[0][0]
    predicted_label = "Anomalous" if predicted_output > 0.5 else "Normal" #To be tuned
    predicted_prob = predicted_output if predicted_output > 0.5 else (1-predicted_output)
    output = {predicted_label:str(predicted_prob)}

    return output


if __name__ == "__main__":
    init()
    app.run(host="0.0.0.0", debug=True, port=9001)

