const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./mongoose");
const verifyToken = require("../controllers/verifyToken");

app.set("port", process.env.PORT || 5000);

/* Middlewares*/
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    text: "api works",
  });
});

/* Routes */
app.use("/products", verifyToken, require("../routes/product.route"));
app.use(require("../controllers/authController"));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
