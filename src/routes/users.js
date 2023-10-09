const router = require('express').Router();
const {
  afterMiddlewareLoader,
  responseSender
} = require('../middlewares/response');
const { errorHandler } = require('../middlewares/error');
const {
  addProfileInfo,
  addLinks,
  getShareableToken,
  getUserData
} = require('../controllers/users');

router.post(
  '/add-profile-info',
  afterMiddlewareLoader,
  addProfileInfo,
  errorHandler,
  responseSender
);

router.post(
  '/add-links',
  afterMiddlewareLoader,
  addLinks,
  errorHandler,
  responseSender
);

router.get(
  '/get-shareable-token',
  afterMiddlewareLoader,
  getShareableToken,
  errorHandler,
  responseSender
);

router.get(
  '/get-user-data',
  afterMiddlewareLoader,
  getUserData,
  errorHandler,
  responseSender
);

module.exports = router;
