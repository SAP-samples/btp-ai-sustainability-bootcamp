FROM python:3.7-buster
FROM tensorflow/tensorflow:latest-gpu
RUN export LD_LIBRARY_PATH=/usr/local/nvidia/lib:$LD_LIBRARY_PATH
ENV LANG C.UTF-8

RUN pip3 install --upgrade pip
COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt

RUN mkdir -p /app/src

RUN chgrp -R nogroup /app && \
    chmod -R 770 /app

COPY infer.py /app/src/

CMD ["gunicorn", "--chdir", "/app/src", "infer:app", "-b", "0.0.0.0:9001"]
