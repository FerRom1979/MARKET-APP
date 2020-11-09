const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const verifyToken = require("../controllers/verifyToken");

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password,
  });
  user.password = await user.encryptPassword(user.password);
  await user.save();
  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  console.log(user);
  res.json({ auth: true, token });
});

router.get("/test", verifyToken, async (req, res, next) => {
  const user = await User.findById(req.userId, { password: 0 });
  if (!user) {
    return res.status(404).send("no user found");
  }

  res.json(user);
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send("the mail doesn´t exists");
  }
  const validPassword = await user.validatePassword(password);
  if (!validPassword) {
    return res.status(401).json({ auth: false, token: null });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });

  res.json({ auth: true, token });
});

module.exports = router;
