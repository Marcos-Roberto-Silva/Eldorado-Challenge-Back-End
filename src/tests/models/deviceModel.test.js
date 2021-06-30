const { expect } = require("chai");

const SequelizeMock = require("sequelize-mock");
const DBConnectionMock = new SequelizeMock();

const DeviceMock = DBConnectionMock.define(
  "Devices",{},
  {
    instanceMethods: {
      myTestFunc: function () {
        return "Test Devices";
      },
    },
  }
);

describe("Inserting a new device on the database", () => {
  const payloadCategory = {
    category: "sasasa",
    color: "111111",
    partNumber: 78787,
    categoryId: 1,
  };

  describe("When inserted with success", () => {
    it(" should return an object", async () => {
      const response = await DeviceMock.create(payloadCategory);
      expect(response).to.be.a("object");
    });

    it('should has the device "id" ', async () => {
      const response = await DeviceMock.create(payloadCategory);
      expect(response).to.have.a.property("id");
    });
  });
});
