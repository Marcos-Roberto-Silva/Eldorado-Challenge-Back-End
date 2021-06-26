const devicesService = require('../services/DevicesService');

const createDevice = async (request, response) => {
    const attributesFields = request.body;
    console.log(request.body);
    const device = await devicesService.createDevice(attributesFields);
    response.status(201).json(device);
};

module.exports = { 
    createDevice,
};