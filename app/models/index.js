const Sequelize = require('sequelize');
const connector = require('./connector');

const Thing = connector.define('thing', {
  name: Sequelize.STRING,
});

module.exports = { Thing };
