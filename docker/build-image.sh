#!/bin/bash

IMAGE=playwright
TAG=v1.46.0-focal-vrt-quick-start

docker build -f Dockerfile -t $IMAGE:$TAG -t $IMAGE:latest .
