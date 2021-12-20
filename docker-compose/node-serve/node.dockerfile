FROM node:12.13.0

# Create app directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# Installing dependencies
COPY package*.json ./
RUN npm install
RUN npm audit fix

# Activate shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Port
EXPOSE 3080

# Running the app
CMD ["npm", "run", "dev"]