const Joi = require('joi');
const { emailRegex } = require('../utils');

const addProfileInfoValidator = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().not().empty(),
    lastName: Joi.string().required().not().empty(),
    profileImgURL: Joi.string().required().not().empty(),
    email: Joi.string().required().pattern(emailRegex).not().empty().messages({
      'string.pattern.base': '"email" is not valid'
    }),
    userId: Joi.string().optional()
  });
  return schema.validate(data);
};

module.exports = { addProfileInfoValidator };
