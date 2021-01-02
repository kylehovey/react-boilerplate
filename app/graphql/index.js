const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
  },
});
