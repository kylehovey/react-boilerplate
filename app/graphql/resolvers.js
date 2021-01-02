const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();
const RANDOM_NUMBER_TOPIC = 'random_number';

setInterval(() => pubsub.publish(RANDOM_NUMBER_TOPIC, Math.random()), 1000);

const Query = {
  helloWorld(root) {
    return {
      hello: 'Hello World',
    };
  },
};

const Subscription = {
  randomNumber() {
    pubsub.asyncIterator([RANDOM_NUMBER_TOPIC]);
  }
};

const Mutation = {
  sayHello(root, { name }) {
    const message = `Hello from ${name}!`;
    console.log(message);

    return message;
  },
};

const resolvers = { Query, Subscription, Mutation };

module.exports = { resolvers };
