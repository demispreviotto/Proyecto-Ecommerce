'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Product, {
        through: models.OrdersProducts,
        // foreignKey: 'OrderId',
        // otherKey: 'ProductId',
      })
    }
  }
  Order.init({
    trakingNumber: DataTypes.STRING,
    orderStatus: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};