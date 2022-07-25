const { CustomError } = require('../errors/custom-error');
const errorHandlerMiddleware = (err, res, req, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err });
};

module.exports = errorHandlerMiddleware;
