const morgan = require("morgan");
const path = require("path");
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

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
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use("/backend/uploads", express.static(path.join(__dirname, "/uploads")));

// Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
