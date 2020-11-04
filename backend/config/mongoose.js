const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('It was possible to connect to the database'))
  .catch((err) => console.log(err));

module.exports = mongoose;
