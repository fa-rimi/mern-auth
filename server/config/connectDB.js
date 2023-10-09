const mongoose = require("mongoose");

// Create a function to connect to mongoose using the .env
async function connectDB() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not defined in the environment.");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(
      `Connected to ${mongoose.connection.name} at ${mongoose.connection.host}:${mongoose.connection.port}`
    );
  } catch (error) {
    console.log("Error connecting database", error);
  }
}

module.exports = connectDB;
