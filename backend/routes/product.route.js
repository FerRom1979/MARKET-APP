const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getProduct);

router.post("/", productController.postProduct);

router.put("/:id", productController.editProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
