const mongoose = require("mongoose");
const {nodeEnv, mongoDBConnectionString} = require("./env");

const databaseConnection = () => {
  const URI = mongoDBConnectionString;

  mongoose
    .connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(
        `Database connected to ${nodeEnv === "production" ? "prod" : "dev"}`
      );
    })
    .catch((err) => console.log(err));
};

module.exports = databaseConnection;
