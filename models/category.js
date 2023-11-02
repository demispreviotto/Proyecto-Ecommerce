'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Product, {
        through: models.ProductCategory,
        //   foreignKey: 'categoryId',
        //   as: 'products'
      })
    }
  }
  Category.init({
    categoryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};