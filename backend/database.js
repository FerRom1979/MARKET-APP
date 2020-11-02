const mongoose = require("mongoose");

const URI = "mongodb://localhost/market-app";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then((db) => console.log("It was possible to connect to the database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
