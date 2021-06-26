"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Devices",
      [
        {
          id: 1,
          category: "mobile",
          color: "silver",
          partNumber: 12121221,
          categoryId: 1,
        },
        {
          id: 2,
          category: "smartTv",
          color: "gray",
          partNumber: 32345655,
          categoryId: 2,
        },
        {
          id: 3,
          category: "Ipad",
          color: "gray",
          partNumber: 84039284,
          categoryId: 1,
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Devices', null, {});
  },
};
