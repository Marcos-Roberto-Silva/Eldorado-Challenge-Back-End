const { Devices } = require("../models");
const message = require("../util/messageError");

const createDevice = async (attributesFields) => {
  const { category, color, partNumber, categoryId } = attributesFields;
  
  const categoryExists = await getDeviceById(categoryId);

  if (!categoryExists) {
    return message.apiMessage;
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

  return device;
};

module.exports = {
  createDevice,
  getAllDevices,
  getDeviceById,
  deleteDevice,
  updateDevice,
};
