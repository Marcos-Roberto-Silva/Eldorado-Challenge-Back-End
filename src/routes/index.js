const router = require("express").Router();

const devicesController = require("../controllers/DevicesController");
const categoryController = require('../controllers/CategoriesController');

/**
 * @swagger
 * /devices:
 *  post:
 *    tags: [Devices]
 *    description: Use to insert a new device
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: devices
 *        description: Save your new device
 *        required: true
 *          - category
 *          - color
 *          - partNumber
 *          - categoryId
 *        properties:
 *          category:
 *              type: string
 *          color: 
 *              type: string
 *          partNumber:
 *              type: number
 *          categoryId:
 *              type: number
 *    responses:
 *      '201':
 *        description: Created
 */

router.post("/devices", devicesController.createDevice);

/**
 * @swagger
 * /devices:
 *  get:
 *    tags: [Devices]
 *    description: It should list all devices.
 *    responses:
 *      '200':
 *        description: OK.
 */

router.get('/devices', devicesController.getAllDevices);

/**
 * @swagger
 * /devices/{id}:
 *  get:
 *    tags: [Devices]
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      type: integer
 *      minimum: 1
 *      description: List a device by its ID 
 *    responses:
 *      '200':
 *        description: OK.
 */

router.get('/devices/:id', devicesController.getDeviceById);

/**
 * @swagger
 * /devices/{id}:
 *  delete:
 *    tags: [Devices]
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      type: integer
 *      minimum: 1
 *      description: List a device by its ID 
 *    responses:
 *      '200':
 *        description: OK.
 */

router.delete('/devices/:id', devicesController.deleteDevice);

/**
 * @swagger
 * /categories:
 *  post:
 *    tags: [Categories]
 *    description: Use to insert a new device
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: categories
 *        description: It saves a new category
 *        required: true
 *          - name
 *        properties:
 *          name:
 *              type: string
 *    responses:
 *      '201':
 *        description: Created
 */

 router.post('/categories', categoryController.createCategory);

module.exports = router;
