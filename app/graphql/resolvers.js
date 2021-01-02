const Query = {
  helloWorld(root) {
    return {
      hello: 'Hello World',
    };
  },
};

const Mutation = {
  sayHello(root, { name }) {
    const message = `Hello from ${name}!`;
    console.log(message);

    return message;
  },
};

const resolvers = { Query, Mutation };

module.exports = { resolvers };
