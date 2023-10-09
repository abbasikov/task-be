const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { USER } = require('../utils/modelNames');

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  links: {
    type: Object
  },
  shareableToken: {
    type: String
  },
  profileImgURL: {
    type: String
  }
});

module.exports = mongoose.model(USER, userSchema);
