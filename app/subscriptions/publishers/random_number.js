const { pubsub, topics } = require('..');

setInterval(() => {
  pubsub.publish(
    topics.RANDOM_NUMBER_TOPIC,
    { randomNumber: Math.random() },
  );
}, 1000);
