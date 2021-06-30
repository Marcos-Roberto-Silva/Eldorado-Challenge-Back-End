const { expect } = require('chai');

const SequelizeMock = require('sequelize-mock');
const DBConnectionMock = new SequelizeMock();


const CategoryMock = DBConnectionMock.define('Categories', {}, {
  instanceMethods: {
      myTestFunc: function () {
          return 'Test Categories';
      },
  },
});

describe('Inserting a new category on database', () => {

  const payloadCategory = {
    name: 'SmartPhone',
  }

  describe('When inserted with success', () => {

    it(' should return an object', async () => {
      const response = await CategoryMock.create(payloadCategory);
      console.log('my test', response);
      expect(response).to.be.a('object');
    });

    it('The objeto has the category "id" ', async () => {
      const response = await CategoryMock.create(payloadCategory);
      expect(response).to.have.a.property('id');
    });

    it('The object has the attribute "name" ', async () => {
      const response = await CategoryMock.create(payloadCategory);
      expect(response).to.have.a.property('name');
    });

    it('The object has the attribute "xablau" ', async () => {
      const response = await CategoryMock.create(payloadCategory);
      expect(response).to.have.a.property('xablau');
      //should fail
    });
  });
});
