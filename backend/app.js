const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
