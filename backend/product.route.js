const express = require("express");
const router = express.Router();

const productSchema = require("./productSchema");

router.get("/", async (req, res) => {
  const products = await productSchema.find();
  console.log(products);
  res.json(products);
});

router.post("/", async (req, res) => {
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
});

module.exports = router;
