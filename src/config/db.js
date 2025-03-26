const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  // const connection = await mongoose.connect(process.env.DB_URL)
  // return connection
  await mongoose.connect(process.env.DB_URL);
};

module.exports = connectDB
