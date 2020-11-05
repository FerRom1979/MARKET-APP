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
  await product.save((err) => {
    if (err) return console.error(err);
    console.log("Product saved");
  });
  res.json({ status: "Product saved" });
};

exports.editProduct = async (req, res) => {
  await productSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err) => {
      if (err) return res.status(500).send(err);
      console.log("Product updated");
    }
  );
  res.json({ status: "Product updated" });
};

exports.deleteProduct = async (req, res) => {
  await productSchema.findByIdAndDelete(req.params.id);
  res.json({ status: "Product deleted" });
};
