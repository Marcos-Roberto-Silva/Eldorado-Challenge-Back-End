const categoriesService = require('../services/CategoriesService');

const createCategory = async (request, response) => {
    const attributeField = request.body;
    const category = await categoriesService.createCategory(attributeField);
    response.status(201).json(category);
}

module.exports = { 
    createCategory,
};