'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('IPData', {
    // Model attributes are defined here
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    city: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.FLOAT
    },
    longitude: {
      type: DataTypes.FLOAT
    }
  },
  );
};
