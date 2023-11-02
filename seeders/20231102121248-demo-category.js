'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        categoryName: "Shoes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "T-Shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Jackets",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Jeans",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Origin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: "Special Edition",
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
