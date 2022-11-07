const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Template extends Model {}

Template.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    template: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'template',
  }
);

module.exports = Template;