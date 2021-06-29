const { Devices } = require("../models");
const checkIf = require("../util/isValid");

const createDevice = async (attributesFields) => {
  const { category, color, partNumber, categoryId } = attributesFields;
  
  const result = await getDeviceById(categoryId);

  const checkIfcategoryExists = await checkIf.itExists(result);

  if (checkIfcategoryExists.code) {
    return checkIfcategoryExists;
  }

  const device = await Devices.create({ category, color, partNumber, categoryId });

  return device;
};

const getAllDevices = async () => {
  const devices = await Devices.findAll();

  return devices;
};

const getDeviceById = async (id) => {
  const device = await Devices.findByPk(id);

  const result = await checkIf.itExists(device);

  if (result.code) {
    return result;
  }

  return device;
};

const updateDevice = async (payload) => {
  const { id, category, color, partNumber, categoryId } = payload;

  const device = await Devices.findOne({ where: { id } }).then( async (device) => {

    if(device) {
      const newDevice = await device.update({ category, color, partNumber, categoryId });

      return newDevice;

    } else {
      const newDevice = await createDevice({ category, color, partNumber, categoryId });

      return newDevice;
    }
  });
 
  return device;
};

const deleteDevice = async (id) => {
  const device = await Devices.destroy({ where: { id } });

  const result = await checkIf.itExists(device);

  if (result.code) {
    return result;
  }
  return device;
};

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
  deleteDevice,
  updateDevice,
};
