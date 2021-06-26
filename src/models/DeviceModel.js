const createDevices = (sequelize, DataTypes) => {
  const Devices = sequelize.define("Devices", {
      category: DataTypes.STRING,
      color: DataTypes.STRING,
      partNumber: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );

  Devices.associate = (models) => {
    Devices.belongsTo(models.Categories, { as: "categories", foreignKey: "categoryId" });
  };

  return Devices;
};

module.exports = createDevices;

