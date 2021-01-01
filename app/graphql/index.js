const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

const rootValue = {
  helloWorld() {
    return {
      hello: 'Hello World'
    };
  },

  sayHello({ name }) {
    const message = `Hello from ${name}!`;
    console.log(message);

    return message;
  },
};

module.exports = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
