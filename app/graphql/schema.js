const { buildSchema } = require('graphql');

// This is a no-op tag so I can get GraphQL syntax highlighting
const gql = ([x])=>x;

const rawSchema = gql`
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

module.exports = buildSchema(rawSchema);
