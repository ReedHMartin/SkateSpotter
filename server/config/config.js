const mongo = require("mongoose");
// sets up connection

mongo.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/skatespotter"
);

module.exports = mongo.connection;
