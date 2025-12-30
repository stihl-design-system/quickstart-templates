#!/bin/bash

IMAGE=playwright
TAG=v1.57.0-noble-vrt-quick-start

docker build -f Dockerfile -t $IMAGE:$TAG -t $IMAGE:latest .
