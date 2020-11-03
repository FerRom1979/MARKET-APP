const mongoose = require("mongoose");

const URI =
  "mongodb+srv://market-app:1234@cluster0.knbkj.mongodb.net/market-app?retryWrites=true&w=majority";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then((db) => console.log("It was possible to connect to the database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
