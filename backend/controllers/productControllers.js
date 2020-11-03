const productSchema = require("../models/productSchema");

exports.getProduct = async (req, res) => {
  const products = await productSchema.find();
  console.log(products);
  res.json(products);
};

exports.postProduct = async (req, res) => {
  const { name, description, quantity, price, finalPrice } = req.body;
  const product = new productSchema({
    name,
    description,
    quantity,
    price,
    finalPrice,
  });
  await product.save();
  res.json({ status: "product saved" });
};
