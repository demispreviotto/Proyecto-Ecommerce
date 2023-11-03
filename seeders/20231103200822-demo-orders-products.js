'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrdersProducts', [
      {
        OrderId: 1,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 1,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 1,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 1,
        ProductId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 2,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 2,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 2,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        OrderId: 2,
        ProductId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
