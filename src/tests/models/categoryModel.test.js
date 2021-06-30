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

    it('should has the category "id" ', async () => {
      const response = await CategoryMock.create(payloadCategory);
      expect(response).to.have.a.property('id');
    });

    it('should has the attribute "name" ', async () => {
      const response = await CategoryMock.create(payloadCategory);
      expect(response).to.have.a.property('name');
    });

    it('should not has the attribute "xablau" ', async () => {
      const response = await CategoryMock.create(payloadCategory);
      expect(response).to.not.have.a.property('xablau');
      //should fail
    });
  });
});
