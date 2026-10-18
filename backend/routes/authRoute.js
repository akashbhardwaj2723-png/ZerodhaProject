
const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModels } = require("../models/UserModels");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({
        message: "Name and password are required",
      });
    }

    if (password.length < 7) {
      return res.status(400).json({
        message: "Password must be at least 7 characters",
      });
    }

    const existingUser = await UserModels.findOne({ name });

    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    const user = await UserModels.create({ name, password });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({
        message: "Name and password are required",
      });
    }

    const user = await UserModels.findOne({ name }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid name or password",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid name or password",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
