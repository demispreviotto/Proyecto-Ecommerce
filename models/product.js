'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: models.ProductCategory,
        // foreignKey: 'productId',
        // as: 'categories',
      }
      );
      Product.belongsToMany(models.Order, {
        through: models.OrdersProducts,
      }
      );
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