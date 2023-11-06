'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Product, { foreignKey: 'ProductId' });
      Review.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  }
  Review.init({
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Review no puede estar vacio" } }
    },
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};