const { Devices } = require('../models');

const createDevice = async (attributesFields) => {
    const device = await Devices.create(attributesFields);
  
    return device;
  };

  module.exports = {
    createDevice,
  };