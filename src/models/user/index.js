const userSchema = require('./schema');
const { USER } = require('../../utils/tables');

const userModel = global.sequelize.define(USER, userSchema);
module.exports = userModel;
