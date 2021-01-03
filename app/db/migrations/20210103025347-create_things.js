module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable(
    'things',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      name: Sequelize.STRING,
    },
  ),

  down: async (queryInterface) => queryInterface.dropTable('things'),
};
