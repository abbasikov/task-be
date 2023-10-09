// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  return res
    .status(err.code)
    .send({ error: err.error, statusCode: err.code, data: null });
};

module.exports = {
  errorHandler
};
