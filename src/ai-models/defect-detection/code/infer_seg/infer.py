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
import tensorflow.keras.metrics as tfm

app = Flask(__name__)

image_pipeline = None

class IoUCustom(tfm.IoU):
    def __init__(self, from_logits=False, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._from_logits = from_logits

    def update_state(self, y_true, y_pred, sample_weight=None):
        y_true_new = y_true[:,:,:,0]
        y_true_new = y_true_new[..., tf.newaxis]
        y_pred_new = tf.argmax(y_pred, axis=-1)
        y_pred_new = y_pred_new[..., tf.newaxis]
        return super(tfm.IoU, self).update_state(y_true_new, y_pred_new, sample_weight)


def iou_loss(y_true, y_pred):
    y_pred_new = y_pred[:,:,:,1:]
    num = tf.reduce_sum(y_true * y_pred_new)
    den = tf.reduce_sum(y_true) + tf.reduce_sum(y_pred_new) - num
        
    return (1-tf.math.divide_no_nan(num,den))


@app.before_first_request
def init():
    """
    Load the model if it is available locally
    """
    global image_pipeline
    path = "/mnt/models"
    model_name = "segmentation_model"

    if exists(f"{path}/{model_name}"):
            logging.info(f"Loading segmentation pipeline from {path}")
            image_pipeline = models.load_model(path+'/'model_name, 
                custom_objects = {"iou_loss": iou_loss, "IoUCustom": IoUCustom})
    else:
        raise FileNotFoundError(f"{path}/{model_name}")

    return None


def load_image(data, IMG_WIDTH, IMG_HEIGHT):
    image = cv2.imdecode(data, cv2.COLOR_BGR2GRAY)
    image = cv2.resize(image, (IMG_HEIGHT, IMG_WIDTH),interpolation = cv2.INTER_AREA)
    image = np.array(image)
    image = image.astype('float32')
    image /= 255
    return image


def defected_area(img):
    imgf = tf.argmax(img, axis=-1)
    num = tf.reduce_sum(imgf)
    num = num.numpy()
    #print(num)
    dims = img.shape
    den = dims[0]*dims[1]
    #print(den)
    #print(num/den if den else 0)
    return (num/den if den else 0)


def create_mask(pred_mask, a, b):
    pred_mask = tf.argmax(pred_mask, axis=-1)
    pred_mask = pred_mask[..., tf.newaxis]
    pred_mask = (np.array(pred_mask, np.float32)*255).astype(np.uint8)
    blur = cv2.GaussianBlur(pred_mask,(5,5),0)
    ret3,th3 = cv2.threshold(blur,0,255,cv2.THRESH_BINARY+cv2.THRESH_OTSU)
    th3 = th3.reshape(a,b,1)
    return th3


def encode_image(img):
    ENCODING = 'utf-8'

    # second: base64 encode read data
    # result: bytes (again)
    base64_bytes = b64encode(img)

    # third: decode these bytes to text
    # result: string (in utf-8)
    base64_string = base64_bytes.decode(ENCODING)

    return base64_string


@app.route("/v1/models/{}:predict".format("imagesegmodel"), methods=["POST"])
def predict():
    """
    Perform an inference on the model created in initialize

    Returns:
        String prediction of the label for the given test data
    """

    global image_pipeline
    input_data = dict(request.json)

    image_file_as_binary = base64.b64decode(input_data['image'])
    nparr = np.frombuffer(image_file_as_binary, np.uint8)
    x_inference = load_image(nparr, 224, 224)
    b = np.array([np.array(x_inference)])

    prediction = image_pipeline.predict(b)
    predicted_output = prediction[0]
    pred = create_mask(predicted_output, 184, 184)

    success, encoded_image = cv2.imencode('.bmp', pred)
    bmp_image = encoded_image.tobytes()

    area = defected_area(pred)
    encoded_image = encode_image(bmp_image)

    output = {str(area): encoded_image}

    return output


if __name__ == "__main__":
    init()
    app.run(host="0.0.0.0", debug=True, port=9001)

