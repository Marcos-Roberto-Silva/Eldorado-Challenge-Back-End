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
 *        description: It saves a device attributes.
 */

router.post("/devices", devicesController.createDevice);

module.exports = router;
