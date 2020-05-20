const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(err.status).json({ message: err.msg })
  }
}


module.exports = errorHandler