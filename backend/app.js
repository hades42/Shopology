const morgan = require("morgan");
const path = require("path");
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");
const productRoutes = require("./routes/productRoutes");

const connectDB = require("./config/db");
connectDB();

const app = express();

//Use morgan to detect http request
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Parse json data
app.use(express.json());

// Test server
app.get("/", (req, res) => {
  res.send("API is running");
});

// Main Routes
app.use("/api/products", productRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
