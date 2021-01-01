const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

const graphql = require('./app/graphql');

app.use('/graphql', cors(), graphql);

io.on('connection', (socket) => {
  setInterval(() => socket.emit('data', Math.random()), 1000);
});

server.listen(process.env.port || 8080);
