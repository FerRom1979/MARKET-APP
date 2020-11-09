const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./mongoose");
const cors = require("cors");

app.set("port", process.env.PORT || 5000);

/* Middlewares*/
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/* Routes */
app.use("/products", require("../routes/product.route"));
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
