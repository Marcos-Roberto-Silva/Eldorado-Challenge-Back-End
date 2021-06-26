const { Devices } = require('../models');

const createDevice = async (attributesFields) => {
    const device = await Devices.create(attributesFields);
  
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

const deleteDevice = async (id) => {
  const device = await Devices.destroy({ where:{ id } });

  return device;
};

  module.exports = {
    createDevice,
    getAllDevices,
    getDeviceById,
    deleteDevice,
  };