docker login docker.io -u yoshidj
docker build code/train -t yoshidj/sound-train:latest
docker push docker.io/yoshidj/sound-train:latest

