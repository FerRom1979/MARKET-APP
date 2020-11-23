const jwt = require("jsonwebtoken");
require("dotenv").config();

async function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send({ auth: false, message: "No token provided" });
  }
  // Decode the Tokenreq.userId = decoded.id;
  const decoded = await jwt.verify(token, "secret-text");
  req.userId = decoded.id;
  next();
}

module.exports = verifyToken;
