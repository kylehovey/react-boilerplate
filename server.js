require('dotenv').config();

const path = require('path');
const express = require('express');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');

const apollo = require('./app/graphql');

const app = express();
const server = http.createServer(app);

app.use(morgan('combined'));

app.use('*',
  cors({
    origin: `http://localhost:3000`,
  }),
);

app.use(express.static(path.join(__dirname, 'client/build')));

apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server);

server.listen(process.env.PORT);
