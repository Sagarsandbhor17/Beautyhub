const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  number: { type: Number, required: false },
  referral: { type: String, required: false },
  role: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
