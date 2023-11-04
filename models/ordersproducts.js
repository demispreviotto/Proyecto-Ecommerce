'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersProducts extends Model {
    static associate(models) {
      OrdersProducts.belongsTo(models.Order, { foreignKey: 'OrderId' });
      OrdersProducts.belongsTo(models.Product, { foreignKey: 'ProductId' });
    }
  }
  OrdersProducts.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdersProducts',
  });
  return OrdersProducts;
};