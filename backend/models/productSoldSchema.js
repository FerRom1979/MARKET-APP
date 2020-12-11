const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSoldSchema = new Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true },
  quantity: { type: Number, required: true },
  dateSale: { type: Number, required: true },
  listPrice: { type: Number, required: true },
  finalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("productsSold", productSoldSchema);
