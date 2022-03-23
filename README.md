# redis-cache-test

# About Repository:
This is a basic node-js project that I created to learn how to cache API data using redis-cache.

# Software(s) required:
* Latest stable version of Node Package Manager
* MongoDB Database
* Redis-cache

# Project Setup:
## NB!
Please make sure you have a running instance of Mongodb and Redis-cache.

* Step 1:

Switch to the projects root directory and run `npm install` to install the required packages.

* Step 2:

In the projects root directory create a `.env` file and add the following variables:

`PORT`

`MONGODB_URL`

`REDIS_PORT`

* Step 3:

Run `npm  run dev` to start-up the server and access the end-points on `http://localhost:PORT/api/graphql`.

# Dependencies:
* CORS
* EXPRESS
* EXPRESS-GRAPHQL
* GRAPHQL
* MONGOOSE
* MORGAN
* REDIS
* DOTENV

# Dev-dependencies:
* NODEMON


