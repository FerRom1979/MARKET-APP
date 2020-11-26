const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const validator = require("email-validator");

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const testValidation = validator.validate(email);
  const mailValidation = await User.findOne({ email });
  const userNameValidation = await User.findOne({ username });

  if (
    testValidation === true &&
    mailValidation === null &&
    userNameValidation === null &&
    username !== "" &&
    password !== ""
  ) {
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
    res.status(200).json({ auth: true, token });
  } else if (testValidation === false) {
    res.status(400).json({
      email: "enter an email similar to this structure: done@gmail.com",
    });
  } else if (mailValidation !== null && userNameValidation !== null) {
    res.status(400).json({
      username: "this username is already registered",
      email: "this email is already registered",
    });
  } else if (mailValidation !== null) {
    res.status(400).json({ email: "this email is already registered" });
  } else if (username === "") {
    res.status(400).json({ username: "enter a username" });
  } else if (password === "") {
    res.status(400).json({ password: "enter a password" });
  } else if (userNameValidation !== null) {
    res.status(400).json({ username: "this username is already registered" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json("the mail doesn´t exists");
  }
  const validPassword = await user.validatePassword(password);
  if (!validPassword) {
    return res.status(404).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });

  res.status(200).json({ auth: true, token });
};

exports.signOut = async (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ message: "User logged out successfully" });
};
