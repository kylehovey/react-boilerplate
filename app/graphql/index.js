const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const { schema } = require('./schema');

const graphql = graphqlExpress({ schema });
const graphiql = graphiqlExpress({ endpointURL: '/graphql' });

module.exports = { graphql, graphiql };
