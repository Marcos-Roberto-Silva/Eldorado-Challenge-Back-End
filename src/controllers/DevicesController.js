const devicesService = require('../services/DevicesService');

const createDevice = async (request, response) => {
    const attributesFields = request.body;
    console.log(request.body);
    const device = await devicesService.createDevice(attributesFields);
    response.status(201).json(device);
};

const getAllDevices = async (_request, response) => {
    const devices = await devicesService.getAllDevices();
    response.status(200).json(devices);
}

module.exports = { 
    createDevice,
    getAllDevices,
};