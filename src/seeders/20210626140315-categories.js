"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          name: "mobile",
        },
        {
          id: 2,
          name: "smartTv",
        },
      ],
      {
        timestamps: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
