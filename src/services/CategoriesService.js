const { Categories } = require('../models');

const createCategory = async (attributeField) => {
  const category = await Categories.create(attributeField);

  return category;
};

module.exports = {
    createCategory,
};