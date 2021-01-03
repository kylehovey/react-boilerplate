const Query = {
  helloWorld() {
    return {
      hello: 'Hello World',
    };
  },

  things(root, _variables, context) {
    const { models } = context;

    return models.Things.findAll();
  },
};

module.exports = { Query };
