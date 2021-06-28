const router = require("express").Router();
const { body } = require("express-validator");

const devicesController = require("../controllers/DevicesController");
const categoryController = require('../controllers/CategoriesController');
const validator = require("../middleawares/middleFieldValidator");

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
 *        description: It saves a device in the list.
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

router.post("/devices", 
    body('category').isString().isLength({ min: 4 }),
    body('color').isString().isLength({ min: 4, max: 16 }),
    body('partNumber').not().isString().isLength({ max: 16  }),
    body('categoryId').isString().isLength({ min: 16 }), validator,
 devicesController.createDevice);

/**
 * @swagger
 * /devices:
 *  get:
 *    tags: [Devices]
 *    description: It lists all devices.
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
 *      description: It lists a device by its ID 
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
 *      description: It removes a device from the list, searching by its ID 
 *    responses:
 *      '200':
 *        description: OK.
 */

router.delete('/devices/:id', devicesController.deleteDevice);

router.put('/devices/:id', devicesController.updateDevice);

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
 *        description: It saves a category in the list.
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

 router.put('/categories/:id', categoryController.updateCategory);
 /**
 * @swagger
 * /categories:
 *  get:
 *    tags: [Categories]
 *    description: It lists all categories.
 *    responses:
 *      '200':
 *        description: OK.
 */

router.get('/categories', categoryController.getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *  get:
 *    tags: [Categories]
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      type: integer
 *      minimum: 1
 *      description: It lists a category by its ID 
 *    responses:
 *      '200':
 *        description: OK.
 */

router.get('/categories/:id', categoryController.getCategoryById);

/**
 * @swagger
 * /categories/{id}:
 *  delete:
 *    tags: [Categories]
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      type: integer
 *      minimum: 1
 *      description: It removes a category by its ID 
 *    responses:
 *      '200':
 *        description: OK.
 */

router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
