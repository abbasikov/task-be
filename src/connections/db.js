const mongoose = require('mongoose');
const { DB_URI } = require('../../config');
const logger = require('../utils/logger');

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    logger.success('Connected successfully to DB!');
  } catch (err) {
    logger.error('Cannot connect to DB!');
  }
};

connectToDB().then(() => {});
