const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  finalPrice: { type: Number },
});

module.exports = mongoose.model("product", productSchema);