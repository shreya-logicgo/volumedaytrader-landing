const mongoose = require("mongoose");

/**
 * Connects to MongoDB using MONGODB_URI from .env
 * Database name is part of the URI (e.g. .../volumedaytrader)
 */
async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing in .env file");
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected:", mongoose.connection.name);
}

module.exports = connectDB;
