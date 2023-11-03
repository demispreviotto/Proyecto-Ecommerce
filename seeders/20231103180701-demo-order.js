'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        trakingNumber: 'UserId.OrderId.Date',
        orderStatus: 'Processing',
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trakingNumber: 'UserId.OrderId.Date',
        orderStatus: 'Processing',
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trakingNumber: 'UserId.OrderId.Date',
        orderStatus: 'Processing',
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trakingNumber: 'UserId.OrderId.Date',
        orderStatus: 'Processing',
        UserId: 5,
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
