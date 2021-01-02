const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();
const RANDOM_NUMBER_TOPIC = 'random_number';

setInterval(() => {
  pubsub.publish(
    RANDOM_NUMBER_TOPIC,
    { randomNumber: Math.random() },
  );
}, 1000);

const Subscription = {
  randomNumber: {
    subscribe: () => pubsub.asyncIterator([RANDOM_NUMBER_TOPIC]),
  },
};

module.exports = { Subscription };
