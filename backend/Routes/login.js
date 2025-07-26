const express = require("express");
const User = require("../models/userdata");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });
    res.json({ message: "Login successful", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
