const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const cors = require('cors');

const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

// This is a no-op tag so I can get GraphQL syntax highlighting
const gql = ([x])=>x;

const schema = buildSchema(gql`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello() {
    return 'Hello World';
  },
};

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

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
