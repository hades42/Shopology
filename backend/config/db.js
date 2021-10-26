const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "ecommerce",
    });
    if (process.env.NODE_ENV !== "test") {
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.error(`Error ${error}`.red.underline.bold);
    }
    process.exit(1);
  }
};

module.exports = connectDB;
