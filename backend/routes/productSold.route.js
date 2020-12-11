const express = require("express");
const router = express.Router();
const productSoldController = require("../controllers/productSoldControllers");

router.get("/", productSoldController.getProduct);

router.post("/", productSoldController.postProduct);

router.put("/:id", productSoldController.editProduct);

router.delete("/:id", productSoldController.deleteProduct);

module.exports = router;
