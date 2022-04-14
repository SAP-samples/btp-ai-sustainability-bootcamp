# -*- coding: utf-8 -*-
"""
Training script to showcase the end-to-end training and evaluation script.
"""

import numpy as np
import pandas as pd
#import datetime
import logging
import cv2
import joblib
import os
import keras
import ast
import random

from sapai import tracking
from os.path import exists
from joblib import load, dump
from os import makedirs, environ
import tensorflow as tf
from tensorflow.keras import layers, Model, models
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
import matplotlib.pyplot as plt

from tensorflow.keras.optimizers import schedules, Adamax, Adam
from tensorflow.keras.initializers import HeNormal
from tensorflow.keras.layers import Conv2D,\
    MaxPool2D, Conv2DTranspose, Input, Activation,\
    Concatenate, CenterCrop, BatchNormalization
import tensorflow.keras.metrics as tfm
from tensorflow.keras.callbacks import ReduceLROnPlateau
import albumentations as A
import sys
sys.path.append('/usr/lib/python3.8/site-packages/')
from tensorflow_examples.models.pix2pix import pix2pix


FORMAT = "%(asctime)s:%(name)s:%(levelname)s - %(message)s"
# Use filename="file.log" as a param to logging to log to a file
logging.basicConfig(format=FORMAT, level=logging.INFO)


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


class TrainSKInterface:
    def __init__(self) -> None:
        # Set the params for the training below
        self.image_pipeline = None
        self.dataset_all = None
        self.train, self.val, self.test = None, None, None
        self.dataset_name = "lgp_dataset"
        self.model_name = "segmentation_model"
        self.output_path = environ["OUTPUT_PATH"]
        self.file_name = environ["DATA_SOURCE"]
        self.loss = None
        self.val_loss = None
        self.accuracy = None
        self.val_accuracy = None
        self.IMG_WIDTH = 224
        self.IMG_HEIGHT = 224
        self.MSK_WIDTH = 224
        self.MSK_HEIGHT = 224
        self.target_classes = None
        self.training_metrics = None

    
    def create_dataset(self, img_folder, bnw, binary, width, height):
        img_data_array = []
        color_str = cv2.COLOR_BGR2GRAY
        color_int = 1
        if(bnw):
            color_str = cv2.cv2.IMREAD_GRAYSCALE
            color_int = 1
        for file in sorted(os.listdir(img_folder)):
                image_path = os.path.join(img_folder, file)
                image = cv2.imread(image_path, color_str)
                image = cv2.resize(image, (height, width), interpolation = cv2.INTER_AREA)
                if(not(bnw)):
                    clahe = cv2.createCLAHE(clipLimit=5.0, tileGridSize=(8,8))
                    image = clahe.apply(image)
                    kernel = np.ones((3,3),np.uint8)
                    image = cv2.dilate(image,kernel,iterations = 1)
                image = np.array(image)
                image = image.astype('float32')
                image /= 255
                image = np.reshape(image, (width, height, color_int))
                
                 # go back to 3 channels
                if not bnw:
                    image = image.repeat(3,axis=-1)
                if(bnw):
                    image = cv2.threshold(image, 0, 1, cv2.THRESH_BINARY)[1]
                if(binary):
                    image = image.tobytes()
                img_data_array.append(image)
        return img_data_array


    def image_transform(self, img, msk):
        transform = A.Compose([
            #A.RandomRotate90(),
            A.Flip(),
            #A.Transpose(),
            #A.OneOf([
            #    A.MotionBlur(p=.2),
            #    A.MedianBlur(blur_limit=3, p=0.3),
            #    A.Blur(blur_limit=3, p=0.1),
            #], p=0.2),
            #A.ShiftScaleRotate(shift_limit=0.0625, scale_limit=0.2, rotate_limit=45, p=0.2),
            #A.OneOf([
            #    A.OpticalDistortion(p=0.3),
            #    A.GridDistortion(p=.1),
            #], p=0.2),
            A.OneOf([
                #A.CLAHE(clip_limit=2),
                A.RandomBrightnessContrast(),            
            ], p=0.3),
            #A.HueSaturationValue(p=0.3),
        ])
        transformed = transform(image=img, mask=msk)
        return transformed['image'], transformed['mask']


    def data_aug(self, img_list, msk_list):
        img_newlist = []
        msk_newlist = []
        for i in range(len(img_list)):
            img, msk = self.image_transform(img_list[i], msk_list[i])
            img_newlist.append(img)
            msk_newlist.append(msk)
        return img_newlist, msk_newlist
    

    def read_dataset(self) -> None:
        """
        Reads the images file from path
        """
        
        path_img_ok = self.file_name + "/OK/"
        path_img_ko = self.file_name + "/NG/"
        path_msk_ok = self.file_name + "/OK_MSK/"
        path_msk_ko = self.file_name + "/NG_MSK/"
        
        logging.info(f"{path_img_ok}")
        logging.info(f"{path_img_ko}")
        logging.info(f"{path_msk_ok}")
        logging.info(f"{path_msk_ko}")
        
        img_dataset_ok_bin = self.create_dataset(path_img_ok, False, True, self.IMG_WIDTH, self.IMG_HEIGHT)
        img_dataset_ko_bin = self.create_dataset(path_img_ko, False, True, self.IMG_WIDTH, self.IMG_HEIGHT)
        msk_dataset_ok_bin = self.create_dataset(path_msk_ok, True, True, self.MSK_WIDTH, self.MSK_HEIGHT)
        msk_dataset_ko_bin = self.create_dataset(path_msk_ko, True, True, self.MSK_WIDTH, self.MSK_HEIGHT)

        df_img_dataset_ok = pd.DataFrame(columns = ['image','label'])
        df_img_dataset_ok['image'] = img_dataset_ok_bin
        df_img_dataset_ok['label'] = 0
        df_img_dataset_ko = pd.DataFrame(columns = ['image','label'])
        df_img_dataset_ko['image'] = img_dataset_ko_bin
        df_img_dataset_ko['label'] = 1
        
        df_msk_dataset_ok = pd.DataFrame(columns = ['mask'])
        df_msk_dataset_ok['mask'] = msk_dataset_ok_bin
        df_msk_dataset_ko = pd.DataFrame(columns = ['mask'])
        df_msk_dataset_ko['mask'] = msk_dataset_ko_bin

        df_img_dataset_tot = pd.concat([df_img_dataset_ok,df_img_dataset_ko], ignore_index=True)
        df_msk_dataset_tot = pd.concat([df_msk_dataset_ok,df_msk_dataset_ko], ignore_index=True)
        
        self.dataset_all = pd.merge(df_img_dataset_tot, df_msk_dataset_tot, left_index=True, right_index=True)
        self.dataset_all = self.dataset_all.sample(frac=1).reset_index(drop=True)
        print(f"No. of training examples: {self.dataset_all.shape[0]}")
        
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
        #self.train=self.dataset_all.copy()
        self.train, self.val = train_test_split(self.dataset_all, test_size=0.3, random_state=25)
        self.val, self.test = train_test_split(self.val, test_size=0.5, random_state=25)

        print(f"No. of training examples: {self.train.shape[0]}")
        print(f"No. of validation examples: {self.val.shape[0]}")
        print(f"No. of test examples: {self.test.shape[0]}")

        return None

    
    def convert_back(self, df, category, color_int, width, height):
        temp_arr = []
        for i in df[category].values:
            a = np.frombuffer(i, dtype=np.float32)
            a = a.reshape(width,height,color_int)
            temp_arr.append(a)
            #print(a.shape)
        return temp_arr

    
    def unet_model(self, num_classes):
        
        '''MobileNetV2 backbone'''
        base_model = tf.keras.applications.MobileNetV2(input_shape=[224, 224, 3], include_top=False)

        # Use the activations of these layers
        layer_names = [
            'block_1_expand_relu',   # 112x112   filters
            'block_3_expand_relu',   # 56x56
            'block_6_expand_relu',   # 28x28
            'block_13_expand_relu',  # 14x14
            'block_16_project',      # 7x7
        ]
        base_model_outputs = [base_model.get_layer(name).output for name in layer_names]

        # Create the feature extraction model
        down_stack = tf.keras.Model(inputs=base_model.input, outputs=base_model_outputs)
        
        #Upsampling layers
        up_stack = [
            pix2pix.upsample(576, 3),  # 7x7 -> 14x14
            pix2pix.upsample(192, 3),  # 8x8 -> 16x16
            pix2pix.upsample(144, 3),  # 16x16 -> 32x32
            pix2pix.upsample(96, 3),   # 32x32 -> 64x64
        ]
            
        inputs = tf.keras.layers.Input(shape=[224, 224, 3])
    
        # Downsampling through the model
        skips = down_stack(inputs)
        x = skips[-1]
        skips = reversed(skips[:-1])
    
        # Upsampling and establishing the skip connections
        for up, skip in zip(up_stack, skips):
            x = up(x)
            concat = tf.keras.layers.Concatenate()
            x = concat([x, skip])
    
        # This is the last layer of the model
        last = tf.keras.layers.Conv2DTranspose(
              filters=num_classes, kernel_size=3, strides=2,
              padding='same')  #64x64 -> 128x128
    
        x = last(x)
        x = Activation("softmax")(x)
    
        return tf.keras.Model(inputs=inputs, outputs=x)    
    
    
    
    def init_model(self):
        '''
            Initialize a U-Net model.
        '''
        
          
        self.image_pipeline = self.unet_model(num_classes=2)
        
        # Retrieve compilation input
        optimizer_init = Adam(learning_rate = 0.002)
        self.image_pipeline.compile(optimizer=optimizer_init,
                                      loss=self.iou_loss,
                                      metrics=[IoUCustom(num_classes=2, target_class_ids=[1], name='iou')],
                                     )

        return None


    def iou_loss(self, y_true, y_pred):
        y_pred_new = y_pred[:,:,:,1:]
        num = tf.reduce_sum(y_true * y_pred_new)
        den = tf.reduce_sum(y_true) + tf.reduce_sum(y_pred_new) - num

        return (1-tf.math.divide_no_nan(num,den))
    


    def train_model(self) -> None:
        """
        Train and save the model
        """
        
        print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
        #config = tf.compat.v1.ConfigProto(device_count = {'GPU': 0, 'CPU': 8}) 
        #sess = tf.compat.v1.Session(config=config) 
        #keras.backend.set_session(sess)
        
        img_train = self.convert_back(self.train, 'image', 3, self.IMG_WIDTH, self.IMG_HEIGHT)
        img_val = self.convert_back(self.val, 'image', 3, self.IMG_WIDTH, self.IMG_HEIGHT)

        msk_train = self.convert_back(self.train, 'mask', 1, self.MSK_WIDTH, self.MSK_HEIGHT)
        msk_val = self.convert_back(self.val, 'mask', 1, self.MSK_WIDTH, self.MSK_HEIGHT)

        img_train_aug_1, msk_train_aug_1 = self.data_aug(img_train, msk_train)
        img_train_aug_2, msk_train_aug_2 = self.data_aug(img_train, msk_train)
        img_train_aug = img_train + img_train_aug_1 + img_train_aug_2
        msk_train_aug = msk_train + msk_train_aug_1 + msk_train_aug_2

        temp = list(zip(img_train_aug, msk_train_aug))
        random.shuffle(temp)
        img_train_shuffle = [i for i,j in temp]
        msk_train_shuffle = [j for i,j in temp]
        
        # Load config
        batch_size = 32
        num_epochs = 500

        # Initialize model
        self.init_model()
        
        reduce_lr = ReduceLROnPlateau(
            monitor='loss', #Change to val_loss once in AICore
            factor=0.8,
            patience=5,
            min_lr=1e-6,
            min_delta=0.0001,
            verbose=2
        )

        history = self.image_pipeline.fit(
            x=np.array(img_train, np.float32) 
            ,y=np.array(msk_train, np.float32)
            #x=np.array(img_train_shuffle, np.float32) 
            #,y=np.array(msk_train_shuffle, np.float32)
            ,epochs=num_epochs
            ,batch_size=batch_size
            #,steps_per_epoch=STEPS_PER_EPOCH
            #,validation_steps=VALIDATION_STEPS
            ,validation_data=(np.array(img_val, np.float32), np.array(msk_val, np.float32))
            ,callbacks=[reduce_lr]
        )
        
        self.loss = history.history['loss']
        self.val_loss = history.history['val_loss']
        self.accuracy = history.history['iou']
        self.val_accuracy = history.history['val_iou']

        return None


    def save_model(self) -> None:
        """
        Saves the model to the local path
        """
        
        logging.info(f"Writing tokenizer into {self.output_path}")
        if not exists(self.output_path):
            makedirs(self.output_path)
        # Save the Tokenizer to pickle file
        self.image_pipeline.save(self.output_path+'/'+self.model_name)

        return None


    def get_model(self) -> None:
        """
        Get the model if it is available locally
        """
        
        if exists(f"{self.output_path}/{self.model_name}"):
            logging.info(f"Loading classifier pipeline from {self.output_path}")
            self.image_pipeline = models.load_model(self.output_path+'/'+self.model_name, 
                                  custom_objects = {"iou_loss": self.iou_loss, "IoUCustom": IoUCustom})
        else:
            logging.info(f"Model has not been trained yet!")

        return None


    def model_metrics(self):
        """
        Perform an inference on the model that was trained
        """
        if self.image_pipeline is None:
            self.get_model()

        infer_data = np.array(self.convert_back(self.val, 'image', 3, self.IMG_WIDTH, self.IMG_HEIGHT), 
                              np.float32) #Change to test sample
        infer_masks = np.array(self.convert_back(self.val, 'mask', 1, self.MSK_WIDTH, self.MSK_HEIGHT),
                               np.float32) #Change to test sample
        
        score = self.image_pipeline.evaluate(infer_data, infer_masks)
        #print("Accuracy: " + str(score[0]))

        metric = [
            {"name": "Model accuracy",
            "value": float(score[1]),
            "labels":[{"name": "dataset", "value": "test set"}]}
            ]
        #print(metric)
        tracking.log_metrics(metric, artifact_name = "defect-detection")
        
        self.training_metrics = [
                    {'loss': str(self.loss)},
                    {'val_loss': str(self.val_loss)},
                    {'iou': str(self.accuracy)},
                    {'val_iou': str(self.val_accuracy)}
                ]
        custom_info_1 = [{"name": "Metrics", "value": str(self.training_metrics)}]

        #print(custom_info_1)
        tracking.set_custom_info(custom_info_1)

        return None


    def run_workflow(self) -> None:
        """
        Run the training script with all the necessary steps
        """
        self.read_dataset()
        self.split_dataset()
        self.get_model()
        if (self.image_pipeline is None):
            # Train the model if no model is available
            logging.info(f"Training classifier and saving it locally")
            self.train_model()
            self.save_model()
        self.model_metrics()

        return None


if __name__ == "__main__":
    train_obj = TrainSKInterface()
    train_obj.run_workflow()