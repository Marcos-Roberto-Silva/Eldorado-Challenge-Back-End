const devicesService = require('../services/DevicesService');

const createDevice = async (request, response) => {
    const attributesFields = request.body;
    
    const device = await devicesService.createDevice(attributesFields);
    
    if (device.code) {
        return response.status(device.code).json(device.codeMsg);
    }
    
    return response.status(201).json(device);
};

const getAllDevices = async (_request, response) => {
    const devices = await devicesService.getAllDevices();
    return response.status(200).json(devices);
}

const getDeviceById = async (request, response) => {
    const { id } = request.params;

    const device = await devicesService.getDeviceById(id);

    if (device.code) {
        return response.status(device.code).json(device.codeMsg);
    }
  
    return response.status(200).json(device);
};

const deleteDevice = async (request, response) => {
    const { id } = request.params;

    const DEVICE_DELETED = 'Device deleted';

    const target = await devicesService.deleteDevice(id);

    if (target.code) {
        return response.status(target.code).json(target.codeMsg);
    }
  
    return response.status(200).json({message: DEVICE_DELETED });
};

const updateDevice = async (request, response) => {
    const { id } = request.params;
    const { category, color, partNumber, categoryId } = request.body;

    const payload = { id, category, color, partNumber, categoryId };

    const device = await devicesService.updateDevice(payload);
    
    return response.status(200).json(device);
};


module.exports = { 
    createDevice,
    getAllDevices,
    getDeviceById,
    deleteDevice,
    updateDevice,
};