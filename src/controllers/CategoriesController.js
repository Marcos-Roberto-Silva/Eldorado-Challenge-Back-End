const categoriesService = require('../services/CategoriesService');

const createCategory = async (request, response) => {
    try {
        const { name } = request.body;

        const category = await categoriesService.createCategory({ name });
       
        if (category.code) {
            console.log('entrei');
            return response.status(category.code).json(category.codeMsg);
        }

        return response.status(201).json(category);

    } catch (error) {
        return response.status(500).json({ message: error });        
    }
};

const getAllCategories = async (_request, response) => {
    const category = await categoriesService.getAllcategories();
    response.status(200).json(category);
};

const getCategoryById = async (request, response) => {
    const { id } = request.params;

    const category = await categoriesService.getCategoryById(id);
  
    if (category.code) {
        return response.status(category.code).json(category.codeMsg);
    }

    response.status(200).json(category);
};

const deleteCategory = async (request, response) => {
    const { id } = request.params;

    const message = 'category removed';

    const target = await categoriesService.DeleteCategory(id);

    if (target.code) {
        return response.status(target.code).json(target.codeMsg);
    }
  
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