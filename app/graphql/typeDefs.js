const { gql } = require('apollo-server');

const typeDefs = gql`
  type HelloWorld {
    hello: String
  }

  type Query {
    helloWorld: HelloWorld
  }

  type Subscription {
    randomNumber: Float
  }

  type Mutation {
    sayHello(name: String!): String
  }
`;

module.exports = { typeDefs };
