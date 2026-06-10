#!/bin/bash

IMAGE=playwright
TAG=v1.60.0-noble-vrt-quick-start

docker build -f Dockerfile -t $IMAGE:$TAG -t $IMAGE:latest .
