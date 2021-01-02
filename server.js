require('dotenv-flow').config();

const path = require('path');
const express = require('express');
const http = require('http');
const morgan = require('morgan');

const models = require('./app/models');
const apollo = require('./app/graphql')({
  context: {
    models,
  },
});

const app = express();
const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.static(path.join(__dirname, 'client/build')));

apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server);

server.listen(process.env.PORT);
