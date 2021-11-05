const morgan = require("morgan");
const path = require("path");
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorHandlers");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const requestRoutes = require("./routes/requestRoutes");

const connectDB = require("./config/db");
connectDB();

const app = express();

//Use morgan to detect http request
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Parse json data
app.use(express.json());

// Main Routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/request", requestRoutes);

if (process.env.NODE_ENV != "test") {
  app.use("/backend/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/api/config/paypal", (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
  );
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve("./"), "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(path.resolve("./"), "client", "build", "index.html")
    )
  );
} else {
  // Test server
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
