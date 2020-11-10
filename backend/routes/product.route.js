const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");
const authController = require("../controllers/authController");

router.get("/", productController.getProduct);

router.post("/", productController.postProduct);

router.put("/:id", productController.editProduct);

router.delete("/:id", productController.deleteProduct);

router.post("/signup", authController.signUp);

router.post("/signin", authController.signIn);

module.exports = router;
