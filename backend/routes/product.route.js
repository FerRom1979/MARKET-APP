const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

const productSchema = require("../models/productSchema");

router.get("/", productController.getProduct);

router.post("/", productController.postProduct);

module.exports = router;
