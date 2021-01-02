const { gql } = require('apollo-server');

const typeDefs = gql`
  type HelloWorld {
    hello: String
  }

  type Thing {
    id: ID!
    name: String
  }

  type Query {
    helloWorld: HelloWorld
    things: [Thing]
  }

  type Subscription {
    randomNumber: Float
  }

  type Mutation {
    makeThing(name: String!): Thing
    deleteThing(id: ID!): Thing
  }
`;

module.exports = { typeDefs };
