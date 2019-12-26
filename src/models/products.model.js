// src/models/products.model.js

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const products = sequelizeClient.define('products', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });
  // eslint-disable-next-line no-unused-vars
  products.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };
  return products;
};
