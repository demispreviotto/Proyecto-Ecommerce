'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        productName: "White Basic T-Shirt",
        productPrice: "5.99",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Black Leather Jacket",
        productPrice: "160.00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Black Combat Boots",
        productPrice: "190.00",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName: "Blue Jean Regular Fit",
        productPrice: "15.00",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
