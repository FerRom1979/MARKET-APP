const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    nombreProducto: "Arroz",
    precio: 55,
  });
});

module.exports = router;
