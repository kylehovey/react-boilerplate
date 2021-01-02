const Mutation = {
  sayHello(root, { name }) {
    const message = `Hello from ${name}!`;
    console.log(message);

    return message;
  },
};

module.exports = { Mutation };
