const { OK_200 } = require('../utils/httpStatus');
const router = require('express').Router();

const userRouter = require('./users');

router.get('/check-health', (req, res) => {
  res.status(OK_200).json({ healthStatus: 'OK' });
});

router.use('/users', userRouter);

module.exports = router;
