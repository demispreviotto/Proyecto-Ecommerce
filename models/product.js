'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Product.belongsToMany(models.Category, {
      //   through: 'ProductCategory',
      //   foreignKey: 'productId',
      //   as: 'categories',
      // });
    }
  }

  Product.init({
    productName: DataTypes.STRING,
    productPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};