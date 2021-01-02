const Subscription = {
  randomNumber: {
    subscribe: (root, variables, context) => {
      const { pubsub, topics } = context;

      return pubsub.asyncIterator([topics.RANDOM_NUMBER_TOPIC]);
    }
  },
};

module.exports = { Subscription };
