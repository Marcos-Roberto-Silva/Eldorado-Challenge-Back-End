const { Categories } = require('../models');

const createCategory = async (attributeField) => {
  const category = await Categories.create(attributeField);

  return category;
};

const getAllcategories = async () => {
    const categories = await Categories.findAll();
  
    return categories;
};

const getCategoryById = async (id) => {
    const category = await Categories.findByPk(id);
  
    return category;
};

const DeleteCategory = async (id) => {
    const category = await Categories.destroy({ where:{ id } });
  
    return category;
};

module.exports = {
    createCategory,
    getAllcategories,
    getCategoryById,
    DeleteCategory,
};