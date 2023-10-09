const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const {
  afterMiddlewareLoader,
  responseSender
} = require('../middlewares/response');
const { errorHandler } = require('../middlewares/error');
const {
  addProfileInfo,
  addLinks,
  getShareableToken,
  getUserData,
  uploadProfileImage
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

router.post(
  '/upload-profile-img',
  upload.single('image'),
  afterMiddlewareLoader,
  uploadProfileImage,
  errorHandler,
  responseSender
);

module.exports = router;
