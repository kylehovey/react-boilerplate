const Sequelize = require('sequelize');
const connector = require('./connector');

const Things = connector.define('thing', {
  name: Sequelize.STRING,
});

module.exports = { Things };
