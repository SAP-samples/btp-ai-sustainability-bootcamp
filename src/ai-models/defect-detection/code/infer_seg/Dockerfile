FROM tensorflow/tensorflow
ENV LANG C.UTF-8

RUN apt-get -y update
RUN apt-get -y install git

RUN pip3 install --upgrade pip
RUN pip3 install setuptools==65.7.0
COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt
RUN pip3 install -q git+https://github.com/tensorflow/examples.git


RUN mkdir -p /app/src

RUN chgrp -R nogroup /app && \
    chmod -R 770 /app

COPY infer.py /app/src/

CMD ["gunicorn", "--chdir", "/app/src", "infer:app", "-b", "0.0.0.0:9001"]
