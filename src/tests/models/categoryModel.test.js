const { expect } = require('chai');

const { Categories } = require('../../models')

describe('Inserting a new category on database', () => {

  const payloadCategory = {
    name: 'SmartPhone',
  }

  describe('When inserted with success', () => {

    it(' should return an object', async () => {
      const response = await Categories.create(payloadCategory);
      expect(response).to.be.a('object');
    });

    it('The objeto has the category "id" ', async () => {
      const response = await Categories.create(payloadCategory);
      expect(response).to.have.a.property('id');
    });
  });
});
