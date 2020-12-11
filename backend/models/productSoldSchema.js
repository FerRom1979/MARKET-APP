const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSoldSchema = new Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true },
  material: { type: String, required: true },
  quantity: { type: Number, required: true },
  measures: { type: String, required: true },
  datePurchase: { type: Number, required: true },
  provider: { type: String, required: true },
  listPrice: { type: Number, required: true },
  finalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("productsSold", productSoldSchema);
