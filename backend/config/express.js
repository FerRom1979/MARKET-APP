const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./mongoose");
/* const verifyToken = require("../controllers/verifyToken");
 */ const cors = require("cors");

app.set("port", process.env.PORT || 5000);

/* Middlewares*/
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    text: "api works",
  });
});

/* Routes */
app.use("/products", /* verifyToken, */ require("../routes/product.route"));
app.use("/", require("../routes/auth.route"));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
