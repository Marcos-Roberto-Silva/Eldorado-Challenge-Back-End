const router = require("express").Router();

const devicesController = require("../controllers/DevicesController");

/**
 * @swagger
 * /devices:
 *  post:
 *    tags: [Device]
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
 *    tags: [Device]
 *    description: It should list all devices.
 *    responses:
 *      '200':
 *        description: OK.
 */

router.get('/devices', devicesController.getAllDevices);

module.exports = router;
