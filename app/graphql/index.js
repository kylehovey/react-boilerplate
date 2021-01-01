const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

const rootValue = {
  hello() {
    return 'Hello World';
  }
};

module.exports = graphqlHTTP({
  schema,
  rootValue,
});
