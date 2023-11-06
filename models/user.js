'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.Review)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Nombre no puede estar vacio" } }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Email no puede estar vacio" },
        isEmail: { msg: "Por favor introduce un correo valido" }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};