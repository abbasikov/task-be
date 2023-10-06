const { Sequelize } = require('sequelize');
const { DB_URI, isDevelopEnv } = require('../../config');
const logger = require('../utils/logger');

const connectToDB = async () => {
  try {
    const sequelize = new Sequelize(DB_URI, {
      logging: isDevelopEnv ? console.log : false
    });
    await sequelize.authenticate();
    logger.success('Connected successfully to DB!');
  } catch (err) {
    logger.error('Cannot connect to DB!');
  }
};

connectToDB().then(() => {});
