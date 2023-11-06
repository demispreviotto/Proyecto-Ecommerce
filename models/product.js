'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: models.ProductCategory,
      });
      Product.belongsToMany(models.Order, {
        through: models.OrdersProducts,
      });
      Product.hasMany(models.Review)
    }
  }

  Product.init({
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Nombre no puede estar vacio" } }
    }
    ,
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notNull: { msg: "Precio no puede estar vacio" } }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};