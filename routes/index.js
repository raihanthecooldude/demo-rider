const express = require("express");
const apiRoutes = require("../api/v1/routes");
const createError = require("../lib/utils/createError");

const router = express.Router();

// catch base route of all methods
router.all("/", (req, res, next) => {
  try {
    return res.send("Server running...");
  } catch (err) {
    next(err);
  }
});

// rest api routes
router.use("/api/v1", apiRoutes);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(createError(404, "404 || Resourse not found!"));
});

// error handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  const issue = {};

  issue.success = false;
  issue.status = errorStatus;
  issue.message = errorMessage;
  issue.stack = process.env.NODE_ENV !== "production" ? err.stack : "";

  return res.status(errorStatus).json(issue);
});

module.exports = router;
