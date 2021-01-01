const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

const rootValue = {
  helloWorld() {
    return {
      hello: 'Hello World'
    };
  }
};

module.exports = graphqlHTTP({
  schema,
  rootValue,
});
