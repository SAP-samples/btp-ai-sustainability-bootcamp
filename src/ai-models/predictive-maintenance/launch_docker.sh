docker run \
  -it \
  --mount type=bind,source="/Users/I550349/workspace/geppetto-and-brothers/data_preparation/sound/data/cutting",target=/app/data/ \
  yoshidj/sound-train:latest \
/bin/bash

