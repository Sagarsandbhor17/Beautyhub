const express = require("express");
const User = require("../Model/user.model");
const jwt = require("jsonwebtoken");

const app = express.Router();

app.post("/signup", async (req, res) => {
  const { name, email, password, number, referral } = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.send({ status: false, message: "User already exist!" });
  }
  const user = await User.create({
    name,
    email,
    password,
    number,
    referral,
    role: "user",
  });
  return res.send({ status: true, message: "You have signup Successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send({ status: false, message: "Wrong Credential!" });
  }

  const Token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      number: user.number,
      referral: user.referral,
    },
    "Secret",
    { expiresIn: "30 days" }
  );

  // const refreshToken = jwt.sign({}, "REFRESH");
  return res.send({
    Token,
    message: "You have signup Successfully",
  });
});

module.exports = app;
