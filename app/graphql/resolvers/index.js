const { Query } = require('./query');
const { Subscription } = require('./subscription');
const { Mutation } = require('./mutation');

const resolvers = { Query, Subscription, Mutation };

module.exports = { resolvers };
