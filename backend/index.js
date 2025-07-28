require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const signupRoutes = require("./Routes/signup");
const loginRoutes = require("./Routes/login");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", signupRoutes);
app.use("/api", loginRoutes);

// Serve frontend build (must come after API routes)
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
