FROM node:12.13.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install
RUN npm audit fix

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Port
EXPOSE 3333

# Running the app
CMD ["npm", "run", "dev"]