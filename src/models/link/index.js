const linkSchema = require('./schema');
const { LINK } = require('../../utils/tables');

const linksModel = global.sequelize.define(LINK, linkSchema);
module.exports = linksModel;
