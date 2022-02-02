FROM node:16.13.2

LABEL version="1.0"
LABEL description="This is base docker image for the react app"
LABEL maintainer=["jaidenmeiden@gmail.com"]

ARG USER
ARG UID

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $UID -d /home/$USER $USER
RUN mkdir -p /home/$USER && chown -R $USER:$USER /home/$USER

# Create app directory
RUN mkdir -p /usr/src/app && chown -R $USER:$USER /usr/src/app
WORKDIR /usr/src/app

# Activate shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

USER $USER:$USER

# Port
EXPOSE 3000