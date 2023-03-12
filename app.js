const express = require("express");
const cors = require("cors");

const databaseConnection = require("./configs/dbConfig");
const indexRouter = require("./routes/index");
const {port, nodeEnv} = require("./configs/env");

const app = express();
app.use(cors());

// request parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(indexRouter);

// Database connection
databaseConnection();

// server
const listenPort = port || 3000;

app.listen(port, () => {
  if (nodeEnv) {
    console.log(`App listening on ${nodeEnv} mode to port ${listenPort}`);
  } else {
    console.log(`App listening on port ${listenPort}`);
  }
});
