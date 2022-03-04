FROM python:3.7.11
ENV LANG C.UTF-8

RUN mkdir -m 777 /tmp/NUMBA_CACHE_DIR /tmp/MPLCONFIGDIR
ENV NUMBA_CACHE_DIR=/tmp/NUMBA_CACHE_DIR/
ENV MPLCONFIGDIR=/tmp/MPLCONFIGDIR/

COPY requirements.txt ./requirements.txt
RUN pip3 install -r requirements.txt

#required for librosa
RUN apt-get update -y
RUN apt-get install -y libsndfile-dev

RUN mkdir -p /app/src

RUN chgrp -R nogroup /app && \
    chmod -R 770 /app

COPY infer.py /app/src/

CMD ["gunicorn", "--chdir", "/app/src", "infer:app", "-b", "0.0.0.0:9001"]
