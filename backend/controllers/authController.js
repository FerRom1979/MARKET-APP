const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const validator = require("email-validator");

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const testValidation = validator.validate(email);

  if (testValidation) {
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
  } else {
    res.json({ email: "invalid" });
  }
};

exports.signIn = async (req, res) => {
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
};
