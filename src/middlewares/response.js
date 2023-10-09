const { OK_200 } = require('../utils/httpStatus');

const afterMiddlewareLoader = (req, res, next) => {
  res.response = function (responseData) {
    req.responseData = responseData;
  };
  next();
};

const responseSender = (req, res) => {
  res
    .status(OK_200)
    .send({ error: null, statusCode: OK_200, data: req.responseData });
};

module.exports = {
  afterMiddlewareLoader,
  responseSender
};
