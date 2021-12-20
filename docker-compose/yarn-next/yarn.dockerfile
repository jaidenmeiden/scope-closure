FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Copying source files
COPY ./ ./

# Building app
RUN yarn build

# Port
EXPOSE 3333

# Running the app
CMD ["yarn", "dev"]