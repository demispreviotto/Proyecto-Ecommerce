'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: "Super Admin One",
        email: "superadminone@admin.com",
        password: bcrypt.hashSync("password", 10),
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Admin One",
        email: "adminone@admin.com",
        password: bcrypt.hashSync("password", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Admin Tow",
        email: "admintow@admin.com",
        password: bcrypt.hashSync("password", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "User One",
        email: "userone@user.com",
        password: bcrypt.hashSync("password", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "User Tow",
        email: "usertow@user.com",
        password: bcrypt.hashSync("password", 10),
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
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
