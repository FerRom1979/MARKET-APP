const productSchema = require("../models/productSchema");

exports.getProduct = async (req, res) => {
  const products = await productSchema.find();
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
  res.json({ status: "Product saved" });
};

exports.editProduct = async (req, res) => {
  await productSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, prod) => {
      if (err) return res.status(500).send(err);
      return res.send(prod);
    }
  );
  res.json({ status: "Product updated" });
};

exports.deleteProduct = async (req, res) => {
  await productSchema.findByIdAndRemove(req.params.id);
  res.json({ status: "Product deleted" });
};
