const { expect } = require('chai');

const { Devices } = require('../../models')

describe('Inserting a new device on the database', () => {

  const payloadCategory = {
    "category": "sasasa",
    "color": "111111",
    "partNumber": 78787,
    "categoryId": 1
 }

  describe('When inserted with success', () => {

    it(' should return an object', async () => {
      const response = await Devices.create(payloadCategory);
      expect(response).to.be.a('object');
    });

    it('The objeto has the device "id" ', async () => {
      const response = await Devices.create(payloadCategory);
      expect(response).to.have.a.property('id');
    });
  });
});
