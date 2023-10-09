const {
  SERVER_ERROR_500,
  BAD_REQUEST_400,
  NOT_FOUND_404
} = require('../utils/httpStatus');
const User = require('../models/user');
const { addProfileInfoValidator } = require('../joiValidators/user');
const randomstring = require('randomstring');

const addProfileInfo = async (req, res, next) => {
  try {
    const { error, value } = addProfileInfoValidator(req.body);
    if (error) {
      return next({
        error: `${error.details[0].message}.`,
        code: BAD_REQUEST_400
      });
    }
    const { userId, firstName, lastName, email } = value;
    let newUser;
    if (userId) {
      newUser = await User.findOneAndUpdate(
        { _id: userId },
        {
          firstName,
          lastName,
          email
        },
        {
          new: true
        }
      );
      if (!newUser) {
        return next({
          error: `User Not Found.`,
          code: NOT_FOUND_404
        });
      }
    } else {
      newUser = await User.create({ firstName, lastName, email });
    }
    res.response({
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email
    });
    next();
  } catch (err) {
    console.log(err);
    next({
      code: SERVER_ERROR_500,
      error: 'Internal Server Error!'
    });
  }
};

const addLinks = async (req, res, next) => {
  try {
    const { userId, links } = req.body;
    let newUser = null;
    if (!userId && !links) {
      return next({
        error: 'No Data Provided!',
        code: BAD_REQUEST_400
      });
    }
    if (userId) {
      newUser = await User.findById(userId);
      if (!newUser) {
        return next({
          error: 'User Not Found!',
          code: NOT_FOUND_404
        });
      }
      if (links) {
        const currLinks = newUser.links || {};
        newUser.links = { ...currLinks, ...links };
        await newUser.save();
      }
      res.response({
        id: userId,
        links: newUser.links || {}
      });
      next();
      return;
    }
    newUser = await User.create({ links });
    res.response({
      id: newUser.id,
      links: newUser.links
    });
    next();
  } catch (err) {
    console.log(err);
    next({
      code: SERVER_ERROR_500,
      error: 'Internal Server Error!'
    });
  }
};

const getShareableToken = async (req, res, next) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return next({
        error: 'User Id Not Provided!',
        code: BAD_REQUEST_400
      });
    }
    let user = await User.findById(userId);
    if (!user) {
      return next({
        error: 'User Not Found!',
        code: NOT_FOUND_404
      });
    }
    let shareableToken = user.shareableToken;
    if (!shareableToken) {
      shareableToken = randomstring.generate();
      await User.updateOne(
        {
          _id: userId
        },
        { shareableToken: shareableToken }
      );
    }
    res.response({
      token: shareableToken
    });
    next();
  } catch (err) {
    console.log(err);
    next({
      code: SERVER_ERROR_500,
      error: 'Internal Server Error!'
    });
  }
};

const getUserData = async (req, res, next) => {
  try {
    const { token } = req.query;
    if (!token) {
      return next({
        error: 'Token Not Provided!',
        code: BAD_REQUEST_400
      });
    }
    const user = await User.findOne({ shareableToken: token });
    res.response({
      user: user && {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        links: user.links
      }
    });
    next();
  } catch (err) {
    console.log(err);
    next({
      code: SERVER_ERROR_500,
      error: 'Internal Server Error!'
    });
  }
};

module.exports = {
  addProfileInfo,
  addLinks,
  getShareableToken,
  getUserData
};
