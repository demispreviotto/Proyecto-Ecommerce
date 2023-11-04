'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
      {
        review: 'This T-shirt is great for everyday wear!',
        UserId: 1,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'I love the fit and comfort of this shirt.',
        UserId: 2,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'A fantastic basic T-shirt at an affordable price.',
        UserId: 3,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'The quality of this leather jacket is outstanding!',
        UserId: 1,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Stylish and durable. Worth every penny.',
        UserId: 2,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Im in love with this leather jacket!',
        UserId: 3,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'These combat boots are heavy-duty and look cool.',
        UserId: 1,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Perfect for hiking and outdoor adventures.',
        UserId: 2,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Very comfortable for long walks.',
        UserId: 3,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Great fit, classic blue jeans!',
        UserId: 1,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Good value for the price.',
        UserId: 2,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'These jeans are my go-to for everyday wear.',
        UserId: 3,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'I love these white canvas sneakers!',
        UserId: 1,
        ProductId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Simple and comfortable sneakers.',
        UserId: 2,
        ProductId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        review: 'Great for casual occasions.',
        UserId: 3,
        ProductId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
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
