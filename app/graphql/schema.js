const { makeExecutableSchema } = require('graphql-tools');
const { resolvers } = require('./resolvers');

// This is a no-op tag so I can get GraphQL syntax highlighting
const gql = ([x])=>x;

const typeDefs = gql`
  type HelloWorld {
    hello: String
  }

  type Query {
    helloWorld: HelloWorld
  }

  type Mutation {
    sayHello(name: String!): String
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = { schema };
