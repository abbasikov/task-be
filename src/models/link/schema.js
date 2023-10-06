const { DataTypes } = require('sequelize');
const { USER } = require('../../utils/tables');

const linksSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  siteName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  siteLink: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: USER,
    referencesKey: 'id',
    allowNull: true
  }
};

module.exports = linksSchema;
