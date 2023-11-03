'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductCategories', [
      {
        ProductId: 1,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 1,
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 2,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 2,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 3,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 3,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 4,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 4,
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 5,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductId: 5,
        CategoryId: 5,
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
