FROM python:3.7-buster
FROM tensorflow/tensorflow:latest-gpu
RUN export LD_LIBRARY_PATH=/usr/local/nvidia/lib:$LD_LIBRARY_PATH

RUN pip3 install --upgrade pip
COPY requirements.txt ./requirements.txt
RUN pip3 install ai-tracking-sdk --index-url http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.snapshots.pypi/simple/ --trusted-host nexus.wdf.sap.corp
RUN pip3 install -r requirements.txt

RUN mkdir -p /app/src/ && \
    mkdir -p /app/model && \
    mkdir -p /app/data

COPY train.py /app/src/

ENV DATA_SOURCE=/app/data
ENV OUTPUT_PATH=/app/model

RUN chgrp -R 65534 /app && \
    chmod -R 770 /app
