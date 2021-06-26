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

const getDeviceById = async (request, response) => {
    const { id } = request.params;

    const device = await devicesService.getDeviceById(id);
  
    response.status(200).json(device);
};

const deleteDevice = async (request, response) => {
    const { id } = request.params;

    const DEVICE_DELETED = 'Device deleted';

    await devicesService.deleteDevice(id);
  
    response.status(200).json({message: DEVICE_DELETED });
};

module.exports = { 
    createDevice,
    getAllDevices,
    getDeviceById,
    deleteDevice,
};