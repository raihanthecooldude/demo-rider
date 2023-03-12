require("dotenv").config();

exports.port = process.env.PORT;
exports.nodeEnv = process.env.NODE_ENV;
exports.mongoDBConnectionString = process.env.MONGO_CONNECTION_STRING;
