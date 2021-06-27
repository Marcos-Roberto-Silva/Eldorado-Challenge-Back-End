const categoriesService = require('../services/CategoriesService');

const createCategory = async (request, response) => {
    const attributeField = request.body;
    const category = await categoriesService.createCategory(attributeField);
    response.status(201).json(category);
};

const getAllCategories = async (_request, response) => {
    const category = await categoriesService.getAllcategories();
    response.status(200).json(category);
};

const getCategoryById = async (request, response) => {
    const { id } = request.params;

    const category = await categoriesService.getCategoryById(id);
  
    response.status(200).json(category);
};

const deleteCategory = async (request, response) => {
    const { id } = request.params;

    const message = 'category removed';

    await categoriesService.DeleteCategory(id);
  
    response.status(200).json({ message });
};

const updateCategory = async (request, response) => {
    const { id } = request.params;
    const { name } = request.body;

    const payload = { id, name };

    const category = await categoriesService.updateCategory(payload);

    response.status(200).json(category);
};

module.exports = { 
    createCategory,
    getAllCategories,
    getCategoryById,
    deleteCategory,
    updateCategory,
};