const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const morgan = require('morgan');

const apollo = require('./app/graphql');

app.use('*', cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server);

server.listen(process.env.port || 8080);
