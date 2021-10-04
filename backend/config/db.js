const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.NODE_ENV);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecommerce",
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error ${error}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
