const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getProduct);

router.post("/", productController.postProduct);

module.exports = router;
