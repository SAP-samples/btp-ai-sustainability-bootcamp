# -*- coding: utf-8 -*-
"""
Training script to showcase the end-to-end training and evaluation script.
"""

import numpy as np
import pandas as pd
import datetime
import logging
import cv2
import joblib
import os
import keras

from sapai import tracking
from os.path import exists
from joblib import load, dump
from os import makedirs
from os import environ
import tensorflow as tf
from tensorflow.keras import layers
from tensorflow.python.keras import backend as K
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix


FORMAT = "%(asctime)s:%(name)s:%(levelname)s - %(message)s"
# Use filename="file.log" as a param to logging to log to a file
logging.basicConfig(format=FORMAT, level=logging.INFO)


class TrainSKInterface:
    def __init__(self) -> None:
        # Set the params for the training below
        self.image_pipeline = None
        self.dataset_all = None
        self.train, self.val, self.test = None, None, None
        self.target_classes = None
        self.dataset_name = "lgp_dataset"
        self.model_name = "classifier_pipeline.pkl"
        self.output_path = environ["OUTPUT_PATH"]
        self.file_name = environ["DATA_SOURCE"]
        self.loss = None
        self.val_loss = None
        self.accuracy = None
        self.val_accuracy = None


    def create_dataset_bin(self, img_folder):
        IMG_WIDTH=224
        IMG_HEIGHT=224
        img_data_array = []
        for file in os.listdir(img_folder):
            image_path = os.path.join(img_folder, file)
            image = cv2.imread(image_path, cv2.IMREAD_COLOR)
            image = cv2.resize(image, (IMG_HEIGHT, IMG_WIDTH),interpolation = cv2.INTER_AREA)
            image = np.array(image)
            image = image.astype('float32')
            image /= 255
            image = image.tobytes()
            img_data_array.append(image)
        return img_data_array 
    

    def read_dataset(self) -> None:
        """
        Reads the images file from path
        """
        
        path_img_ok = self.file_name + "/OK/"
        path_img_ko = self.file_name + "/NG/"

        logging.info(f"{path_img_ok}")
        logging.info(f"{path_img_ko}")
        
        img_dataset_ok_bin = self.create_dataset_bin(path_img_ok)
        img_dataset_ko_bin = self.create_dataset_bin(path_img_ko)

        df_img_dataset_ok = pd.DataFrame(columns = ['image','label'])
        df_img_dataset_ok['image'] = img_dataset_ok_bin
        df_img_dataset_ok['label'] = 0
        df_img_dataset_ko = pd.DataFrame(columns = ['image','label'])
        df_img_dataset_ko['image'] = img_dataset_ko_bin
        df_img_dataset_ko['label'] = 1

        self.dataset_all = pd.concat([df_img_dataset_ok,df_img_dataset_ko], ignore_index=True)
        self.dataset_all = self.dataset_all.sample(frac=1).reset_index(drop=True)
        self.target_classes = self.dataset_all["label"].unique()
        #print(f"No. of training examples: {self.dataset_all.shape[0]}")
        #print(f"Classes: {self.target_classes}")
        
        return None


    def split_dataset(self) -> None:
        """
        Split the dataset into train, validate and test

        Raises:
            Error: if dataset_train and dataset_test are not set
        """
        if self.dataset_all is None:
            raise Exception("Train or test data not set")

        #Change splitting proportions
        self.train, self.val = train_test_split(self.dataset_all, test_size=0.4, random_state=25)
        self.val, self.test = train_test_split(self.val, test_size=0.5, random_state=25)

        #print(f"No. of training examples: {self.train.shape[0]}")
        #print(f"No. of validation examples: {self.val.shape[0]}")
        #print(f"No. of test examples: {self.test.shape[0]}")

        return None


    def convert_back(self, df):
        
        temp_arr = []
        for i in df['image'].values:
            a = np.frombuffer(i, dtype=np.float32)
            a = a.reshape(224,224,3)
            temp_arr.append(a)
            #print(a.shape)
            
        return temp_arr


    def prepare_model(self):
    
        base_model = tf.keras.applications.vgg16.VGG16(
            input_shape = (224, 224, 3), # Shape of our images
            include_top = False, # Leave out the last fully connected layer
            weights = 'imagenet'
        )

        for layer in base_model.layers:
            if(layer.name == 'block4_conv1'):
                break
            else:
                layer.trainable = False

        # Flatten the output layer to 1 dimension
        x = layers.Flatten()(base_model.output)

        # Add a fully connected layer with 512 hidden units and ReLU activation
        x = layers.Dense(512, activation='relu')(x)

        # Add a dropout rate of 0.5
        x = layers.Dropout(0.5)(x) #To be uncommented

        # Add a final sigmoid layer with 1 node for classification output
        x = layers.Dense(1, activation='sigmoid')(x)

        self.image_pipeline = tf.keras.models.Model(base_model.input, x)

        self.image_pipeline.compile(optimizer = tf.keras.optimizers.RMSprop(learning_rate=1e-5),
                      loss = 'binary_crossentropy', 
                      metrics = ['accuracy']
                     )
        
        #self.image_pipeline.summary()
        
        return None


    def train_model(self) -> None:
        """
        Train and save the model
        """
        
        config = tf.compat.v1.ConfigProto(device_count = {'GPU': 1, 'CPU': 7}) 
        sess = tf.compat.v1.Session(config=config) 
        keras.backend.set_session(sess)

        img_train = self.convert_back(self.train)
        img_val = self.convert_back(self.val)
        
        #print(len(img_train))
        #print(len(img_val))
        #print(img_train[0].shape)
        #print(img_val[0].shape)

        history = self.image_pipeline.fit(
            x=np.array(img_train, np.float32), 
            y=np.array(list(map(int,self.train['label'])), np.float32), 
            validation_data = (np.array(img_val, np.float32), self.val['label'].values)
            #,steps_per_epoch = 100
            ,epochs = 40 #To be changed
        )

        self.loss = history.history['loss']
        self.val_loss = history.history['val_loss']
        self.accuracy = history.history['accuracy']
        self.val_accuracy = history.history['val_accuracy']

        return None


    def save_model(self) -> None:
        """
        Saves the model to the local path
        """
        
        logging.info(f"Writing tokenizer into {self.output_path}")
        if not exists(self.output_path):
            makedirs(self.output_path)
        # Save the Tokenizer and target classes to pickle file
        with open(f"{self.output_path}/{self.model_name}", "wb") as handle:
            dump([self.image_pipeline, self.target_classes], handle)

        return None


    def get_model(self) -> None:
        """
        Get the model if it is available locally
        """
        
        if exists(f"{self.output_path}/{self.model_name}"):
            logging.info(f"Loading classifier pipeline from {self.output_path}")
            with open(f"{self.output_path}/{self.model_name}", "rb") as handle:
                [self.image_pipeline, self.target_classes] = load(handle)
        else:
            logging.info(f"Model has not been trained yet!")

        return None


    def model_metrics(self):
        """
        Perform an inference on the model that was trained
        """
        if self.image_pipeline is None:
            self.get_model()

        infer_data = np.array(self.convert_back(self.test), np.float32)
        infer_data_labels = self.test['label'].values
        
        score = self.image_pipeline.evaluate(infer_data[0:100], infer_data_labels[0:100])
        #print("Accuracy: " + str(score[0]))

        metric = [
            {"name": "Model Accuracy",
            "value": float(score[1]),
            "labels":[{"name": "dataset", "value": "test set"}]}
            ]
        #print(metric)
        tracking.log_metrics(metric, artifact_name = "defect-detection")

        training_metrics = [
                    {'loss': str(self.loss)},
                    {'val_loss': str(self.val_loss)},
                    {'accuracy': str(self.accuracy)},
                    {'val_accuracy': str(self.val_accuracy)}
                ]
        custom_info_1 = [{"name": "Metrics", "value": str(training_metrics)}]

        #print(custom_info_1)
        tracking.set_custom_info(custom_info_1)
        
        #confusion matrix
        y_pred = np.round(self.image_pipeline.predict(infer_data[0:100]), 0)
        cnf_matrix = confusion_matrix(infer_data_labels[0:100], y_pred)
        cf_matrix = [
                        {'actual label - 0': str(cnf_matrix[0])},
                        {'actual label - 1': str(cnf_matrix[1])}
                    ]
        custom_info_2 = [{"name": "Confusion Matrix (columns: predicted-class, rows: actual-class)",
                    "value": str(cf_matrix)}]

        #print(custom_info_2)
        tracking.set_custom_info(custom_info_2)

        return None


    def run_workflow(self) -> None:
        """
        Run the training script with all the necessary steps
        """
        self.read_dataset()
        self.split_dataset()
            
        self.get_model()
        if self.image_pipeline is None:
            # Train the model if no model is available
            logging.info(f"Training classifier and saving it locally")
            self.prepare_model()
            self.train_model()
            self.save_model()

        self.model_metrics()

        return None


if __name__ == "__main__":
    train_obj = TrainSKInterface()
    train_obj.run_workflow()
