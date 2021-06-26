const { Categories } = require('../models');

const createCategory = async (attributeField) => {
  const category = await Categories.create(attributeField);

  return category;
};

const getAllcategories = async () => {
    const categories = await Categories.findAll();
  
    return categories;
};

module.exports = {
    createCategory,
    getAllcategories,
};