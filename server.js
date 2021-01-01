const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = {
  on(_, fn) {
    setInterval(() => fn(Math.random()), 1000);
  }
};

io.on('connection', (socket) => {
  port.on("data", (data) => socket.emit("data", data));
  console.log('a user connected');
});

server.listen(process.env.port || 8080);
