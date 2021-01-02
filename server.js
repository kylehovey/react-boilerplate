const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { graphql, graphiql } = require('./app/graphql');

app.use('*', cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use('/graphql', bodyParser.json(), graphql);
app.use('/graphiql', graphiql);

io.on('connection', (socket) => {
  setInterval(() => socket.emit('data', Math.random()), 1000);
});

server.listen(process.env.port || 8080);
