const express = require("express");
const User = require("../models/userdata");

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { name, email, dob, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already used" });
    }

    const newUser = new User({ name, email, dob, password });
    await newUser.save();

    res.status(201).json({ message: "User signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
