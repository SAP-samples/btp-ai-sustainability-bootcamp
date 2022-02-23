# -*- coding: utf-8 -*-
"""
Inference script that extends from the base infer interface
"""

from os.path import exists
from joblib import load
import numpy as np
from flask import Flask, request

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


@app.route("/v1/models/{}:predict".format("imagemodel"), methods=["POST"])
def predict():
    """
    Perform an inference on the model created in initialize

    Returns:
        String prediction of the label for the given test data
    """

    global image_pipeline, target_classes
    input_data = dict(request.json)
    input_data = np.array(input_data["image"], np.float32)

    prediction = image_pipeline.predict(input_data)
    predicted_label = "Anomalous" if prediction[0] > 0.5 else "Normal" #To be tuned
    #predicted_label = target_classes[prediction[0]]
    output = {"predictions": predicted_label}

    return output


if __name__ == "__main__":
    init()
    app.run(host="0.0.0.0", debug=True, port=9001)

