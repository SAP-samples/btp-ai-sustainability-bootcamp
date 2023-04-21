FROM tensorflow/tensorflow:latest-gpu
RUN export LD_LIBRARY_PATH=/usr/local/nvidia/lib:$LD_LIBRARY_PATH

RUN apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/3bf863cc.pub

RUN apt-get -y update
RUN pip3 install --upgrade pip

COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt

RUN apt remove git -y
RUN apt-get install git -y && git clone https://github.com/tensorflow/examples.git

RUN mkdir -p /app/src/ && \
    mkdir -p /app/model && \
    mkdir -p /app/data

COPY train.py /app/src/

ENV DATA_SOURCE=/app/data
ENV OUTPUT_PATH=/app/model

RUN chgrp -R 65534 /app && \
    chmod -R 770 /app
