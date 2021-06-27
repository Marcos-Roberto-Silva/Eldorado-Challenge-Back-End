const createCategory = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  Categories.associate = (models) => {
    Categories.hasMany(models.Devices, {
      as: "devices",
      foreignKey: "categoryId",
    });
  };

  return Categories;
};

module.exports = createCategory;
