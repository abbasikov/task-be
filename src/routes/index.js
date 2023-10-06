const { OK_200 } = require('../utils/httpStatus');
const router = require('express').Router();

router.get('/check-health', (req, res) => {
  res.status(OK_200).json({ healthStatus: 'OK' });
});

module.exports = router;
