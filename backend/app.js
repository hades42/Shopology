const path = require("path");
const express = require("express");

const connectDB = require("./config/db");
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
