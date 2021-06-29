const { expect } = require('chai');

const DevicesModel = require('../../models/DeviceModel');

describe('Should insert a device into the database', () => {
    const payloadDevice = { 
        category: 'smart-TV',
        color: "silver-gray",
        partNumber: 12345678,
        categoryId: 1
    }

    describe('When it is successful inserted', async () => {
        it('should retrive an object', async () =>  {
            const response = await DevicesModel.create(payloadDevice);

            expect(response).to.be.a('object');
        });

        it('tal objeto possui o "id" do novo filme inserido', async () => {
            const response = await DevicesModel.create(payloadMovie);
      
            expect(response).to.have.a.property('id')
        });
    });
})