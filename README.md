# React Application

In the root of the project you should find the file `.env.example` which must be renamed like `.env`. From this moment you can work normally with `Laravel`.

## Docker Configuration

Generate images and backend containers with the following command:

```bash
$ make up
```

To restart containers:

```bash
$ make down && make prune && make up
```

React app in the Node Docker container:

```bash
$ docker ps -a
$ docker exec -itu 1000:1000 frontend_app node -v
$ docker exec -itu 1000:1000 frontend_app npm -v
$ docker exec -itu 1000:1000 frontend_app npx create-react-app application/
```

## Node

<span style="color: orange"> The docker machine executes all the necessary commands for the project can run in a development environment</span>

```bash
$ make shell node

$ node -v
$ npm -v

# In case you want to exit the shell you just have to type
$ exit
```

# Optional Node Configuration (Without Docker)

### <span style="color: orange"> If you want to use node without Docker into the project</span>

```bash
# Install Node dependencies
$ npm install

# Compile the frontend once
$ npm run dev

# Build our application
$ npm run build

# Start our application
$ npm run start

# In case you want to exit the shell you just have to type
$ exit
```

## Server configuration

It must be located at the root of the project within the server and execute the following commands:

### First time access

```bash

# Clone the application (Enter credentials when requested)
$ sudo git clone https://bitbucket.org/aiudo/frontend-internal-management.git
$ cd frontend-internal-management
$ cp .env.example .env

# Change necessary information to connect application into '.env' file
$ sudo nano .env

# Confirm 'master' like active branch
$ sudo git branch -l

# Update the project
$ sudo git pull

# First, on the server, install pm2 if you haven't already. Global installation.
$ npm install pm2 -g

# Intall dependencies
$ sudo npm intall

# Build our application
$ sudo npm run build

# Now let's serve our application.
$ pm2 start npm --name frontend -- start

# Check it.
$ pm2 ls

# Check if port is active
$ sudo lsof -i -P -n
$ sudo lsof -i -P -n | grep LISTEN

```

#### Create Nginx Server

```diff
server {
  server_name new-frontend.aiudo.dev www.new-frontend.aiudo.dev;

  if ($host = www.new-frontend.aiudo.dev) {
    return 301 https://new-frontend.aiudo.dev$request_uri;
  }

  location / {
    proxy_pass http://localhost:4444;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

  location /_next/static/ {
    gzip on;
    gzip_comp_level 5;
    gzip_proxied any;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types application/javascript;
    expires 30d;
    alias /var/www/frontend-internal-management/.next/static/;
  }

}
```

### Later accesses

```bash

# Enter to application
$ cd frontend-internal-management

# Update the project
$ sudo git pull

# Build our application
$ sudo npm run build

# Now restart our application.
$ pm2 restart frontend

# Check it.
$ pm2 ls

# Check if port is active
$ sudo lsof -i -P -n
$ sudo lsof -i -P -n | grep LISTEN

```

# Application access

[Development Application](http://localhost:3333)

[Production Application](https://new-frontend.aiudo.dev/)

## <font color="red"> Errors</font>

```diff
./src/pages/pages/contact-us.js
Attempted import error: '../../layouts/centered' does not contain a default export (imported as 'Centered').
```

Solved with:
Put instruction `export default Centered` into `contact-us.js` file

## Licencia

Copyright © 2021 JaidenMeiden.
