const Mutation = {
  makeThing(root, { name }, context) {
    const { models } = context;

    return models.Things.create({ name });
  },

  async deleteThing(root, { id }, context) {
    const { models } = context;

    const thing = await models.Things.findOne({
      where: {
        id,
      },
    });

    if (thing === null) {
      throw new Error(`Thing with id ${id} not found.`);
    }

    await thing.destroy();

    return thing;
  },
};

module.exports = { Mutation };
