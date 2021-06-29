const { Categories } = require('../models');
const checkIf = require('../util/isValid');

const createCategory = async ({ name }) => {
  const category = await Categories.create({ name });

  return category;
};

const getAllcategories = async () => {
    const categories = await Categories.findAll();
  
    return categories;
};

const getCategoryById = async (id) => {
    const category = await Categories.findByPk(id);
   
    const checkIfcategoryExists = await checkIf.itExists(category);
 
    if (checkIfcategoryExists.code) {
      return checkIfcategoryExists;
    }
  
    return category;
};

const DeleteCategory = async (id) => {
    const category = await Categories.destroy({ where:{ id } });

    const result = await checkIf.itExists(category);

    if (result.code) {
      return result;
    }
  
    return category;
};

const updateCategory = async (payload) => {
    const { id, name } = payload;
  
    const category = await Categories.findOne({ where: { id } }).then( async (obj) => {
  
       const newcategory = await obj.update({ name });
        
       return newcategory;
  
    });
   
    return category;
  };

module.exports = {
    createCategory,
    getAllcategories,
    getCategoryById,
    DeleteCategory,
    updateCategory
};