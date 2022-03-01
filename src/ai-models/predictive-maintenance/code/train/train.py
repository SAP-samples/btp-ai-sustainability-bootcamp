# -*- coding: utf-8 -*-
"""
Training script to showcase the end-to-end training and evaluation script.
"""

import numpy as np
import pandas as pd
import logging
import datetime

import joblib
from joblib import load, dump

import os
from os.path import exists
from os import makedirs
from os import environ
from glob import glob

import librosa
from tensorflow.keras import models, layers
import tensorflow as tf
from tensorflow.python.keras import backend as K
from tensorflow.python.client import device_lib
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix

from sapai import tracking

\
FORMAT = "%(asctime)s:%(name)s:%(levelname)s - %(message)s"
# Use filename="file.log" as a param to logging to log to a file
logging.basicConfig(format=FORMAT, level=logging.INFO)


class TrainInterface:
    def __init__(self) -> None:
        # Set the params for the training below
        self.tf_model = None
        self.dataset = None
        self.train, self.validation, self.test = None, None, None
        self.X_train, self.X_validation, self.X_test = [],[],[]
        self.y_train, self.y_validation, self.y_test = [],[],[]
        self.target_classes = None
        self.model_name = "sound_classifier.pkl"
        self.output_path = environ["OUTPUT_PATH"]
        self.file_name = environ["DATA_SOURCE"]
        self.loss = None
        self.val_loss = None
        self.accuracy = None
        self.val_accuracy = None

    def acoustic_feature_computation( self, clip ):
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
        

    def read_dataset(self) -> None:
        """
        Reads the images file from path
        """
        
        path=self.file_name+'/*/*'
        logging.info(f"{path}")
        
        clips=glob(path)
        clips_df=pd.DataFrame(data={'path':clips,
                            'label':[c.split('/')[-2] for c in clips]} )


        self.dataset = self.dataset.sample(frac=1).reset_index(drop=True)
        self.target_classes = self.dataset["label"].unique()

        
        return None


    def split_dataset(self) -> None:
        """
        Split the dataset into train, validate and test

        Raises:
            Error: if dataset_train and dataset_test are not set
        """
        if self.dataset is None:
            raise Exception("Train or test data not set")

        #Change splitting proportions
        self.train, self.val = train_test_split(self.dataset_all, test_size=0.4, random_state=25)
        self.val, self.test = train_test_split(self.val, test_size=0.5, random_state=25)

        train, test = train_test_split(clips_df, test_size=0.20, random_state=25)
        train, validation = train_test_split(train, test_size=0.20, random_state=25)
        
        return None

    def compute_features(self) -> None:
 
        for i,r in self.train.iterrows():
            self.X_train.append(acoustic_feature_computation(r['path']))
            self.y_train.append(r['label'])
            
        for i,r in self.test.iterrows():
            self.X_test.append(acoustic_feature_computation(r['path']))
            self.y_test.append(r['label'])
 
        for i,r in self.validation.iterrows():
            self.X_validation.append(acoustic_feature_computation(r['path']))
            self.y_validation.append(r['label'])
        
        return None 
    
    def prepare_model(self):
    
        initializer = tf.keras.initializers.GlorotUniform()
        
        input_shape=(104,65,1)
        self.tf_model = models.Sequential(name = "CNN2")
        
        # Block 1
        self.tf_model.add(layers.Conv2D(32, (4, 4),(2,2), activation='relu', input_shape=input_shape, kernel_initializer=initializer, name ='block1_cnn1'))
        self.tf_model.add(layers.BatchNormalization())
        self.tf_model.add(layers.Conv2D(32, (4, 4),(2,2), activation='relu', kernel_initializer=initializer, name ='block1_cnn2'))
        self.tf_model.add(layers.BatchNormalization())
        self.tf_model.add(layers.MaxPooling2D((2, 2), name ='block1_maxpool'))
        
        # FC layers
        self.tf_model.add(layers.Flatten())
        self.tf_model.add(layers.Dense(512, activation='relu',kernel_initializer=initializer,name='FC1' ))
        self.tf_model.add(layers.Dropout(0.5))
        self.tf_model.add(layers.Dense(64, activation='relu',kernel_initializer=initializer,name='FC2' ))
        self.tf_model.add(layers.Dropout(0.5))
        
        # Output
        self.tf_model.add(layers.Dense(2, activation='softmax'))
        
        
        return None


    def train_model(self) -> None:
        """
        Train and save the model
        """
        
        dev = device_lib.list_local_devices()
        print([x.name for x in dev ])
        print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))

        self.tf_model.compile(optimizer= "adam",
              loss =tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True), 
              metrics = ['accuracy'])
        #config = tf.compat.v1.ConfigProto(device_count = {'GPU': 1, 'CPU': 15}) 
        #sess = tf.compat.v1.Session(config=config) 
        #keras.backend.set_session(sess)
        
        history = self.tf_model.fit(
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
            dump([self.tf_model, self.target_classes], handle)

        return None


    def get_model(self) -> None:
        """
        Get the model if it is available locally
        """
        
        if exists(f"{self.output_path}/{self.model_name}"):
            logging.info(f"Loading classifier pipeline from {self.output_path}")
            with open(f"{self.output_path}/{self.model_name}", "rb") as handle:
                [self.tf_model, self.target_classes] = load(handle)
        else:
            logging.info(f"Model has not been trained yet!")

        return None


    def model_metrics(self):
        """
        Perform an inference on the model that was trained
        """
        if self.tf_model is None:
            self.get_model()

        infer_data = np.array(self.convert_back(self.test), np.float32)
        infer_data_labels = self.test['label'].values
        
        score = self.tf_model.evaluate(infer_data, infer_data_labels)
        #print("Accuracy: " + str(score[0]))

        metric = [
            {"name": "Model Accuracy",
            "value": float(score[1]),
            "labels":[{"name": "dataset", "value": "test set"}]}
            ]
        #print(metric)
        tracking.log_metrics(metric, artifact_name = "sound-clf")

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
        y_pred = np.round(self.tf_model.predict(infer_data), 0)
        cnf_matrix = confusion_matrix(infer_data_labels, y_pred)
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
        self.compute_features()
        
        self.get_model()
        if self.tf_model is None:
            # Train the model if no model is available
            logging.info(f"Training classifier and saving it locally")
            self.prepare_model()
            self.train_model()
            self.save_model()

        self.model_metrics()

        return None


if __name__ == "__main__":
    train_obj = TrainInterface()
    train_obj.run_workflow()
