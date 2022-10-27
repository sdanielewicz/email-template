const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class testModel extends Model {}

testModel.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    test_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'test',
  }
);

module.exports = testModel;
