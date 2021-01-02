const Query = {
  helloWorld(root, variables, context) {
    return {
      hello: 'Hello World',
    };
  },

  things(root, variables, context) {
    const { models } = context;

    return models.Things.findAll();
  }
};

module.exports = { Query };
