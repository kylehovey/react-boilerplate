require('dotenv').config();

const path = require('path');
const express = require('express');
const http = require('http');
const morgan = require('morgan');

const apollo = require('./app/graphql');

const app = express();
const server = http.createServer(app);

if (process.env.DEVELOPMENT) {
  app.use(morgan('tiny'));
}

app.use(express.static(path.join(__dirname, 'client/build')));

apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server);

server.listen(process.env.PORT);
