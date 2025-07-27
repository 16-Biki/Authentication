// npm init -y
// npm install express mongoose dotenv cors bcrypt
// npm install --save-dev nodemon

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

// API routes
app.use("/api", signupRoutes);
app.use("/api", loginRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error("DB error:", err));

// Serve React build folder
app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
