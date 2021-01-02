const Query = {
  helloWorld(root) {
    return {
      hello: 'Hello World',
    };
  },
};

module.exports = { Query };
