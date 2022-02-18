FROM python:3.7-slim

RUN pip3 install --upgrade pip
COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt

RUN mkdir -p /app/src/ && \
    mkdir -p /app/model && \
    mkdir -p /app/data

COPY train.py /app/src/

ENV DATA_SOURCE=/app/data
ENV OUTPUT_PATH=/app/model

RUN chgrp -R 65534 /app && \
    chmod -R 770 /app
