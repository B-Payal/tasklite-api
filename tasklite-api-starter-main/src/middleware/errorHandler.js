// TODO: Implement centralized error handler
// - Log error
// - Return JSON:
// { success: false, message: "Internal Server Error" }

const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ success: false, message: "Internal Server Error" })
  // TODO
};

module.exports = errorHandler;
