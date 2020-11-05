const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./mongoose");

app.set("port", process.env.PORT || 5000);

/* Middlewares*/
app.use(morgan("dev"));
app.use(express.json());

/* Routes */
app.use("/products", require("../routes/product.route"));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
