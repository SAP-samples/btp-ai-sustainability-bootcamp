FROM tensorflow/tensorflow:latest-gpu
RUN export LD_LIBRARY_PATH=/usr/local/nvidia/lib:$LD_LIBRARY_PATH

RUN apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/3bf863cc.pub

RUN apt-get -y update
RUN apt-get -y install git

RUN pip3 install --upgrade pip
RUN pip3 install setuptools==65.7.0
COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt
RUN pip3 install -q git+https://github.com/tensorflow/examples.git

RUN mkdir -p /app/src/ && \
    mkdir -p /app/model && \
    mkdir -p /app/data

COPY train.py /app/src/

ENV DATA_SOURCE=/app/data
ENV OUTPUT_PATH=/app/model

RUN chgrp -R 65534 /app && \
    chmod -R 770 /app
