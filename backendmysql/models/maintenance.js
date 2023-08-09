// models/maintenance.js
const { DataTypes } = require('sequelize');
const sequelize = require("./init");

const Maintenance = sequelize.define('maintenance', {
  Nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Line: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Station: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Problem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

console.log(Maintenance);

module.exports = Maintenance;
