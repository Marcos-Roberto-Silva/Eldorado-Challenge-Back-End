const { Devices } = require('../models');

const createDevice = async (attributesFields) => {
    const device = await Devices.create(attributesFields);
  
    return device;
};

const getAllDevices = async () => {
  const devices = await Devices.findAll();

  return devices;
};

  module.exports = {
    createDevice,
    getAllDevices,
  };