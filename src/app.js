const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`Server is up and running on port ${port}`)
    );
  })
  .catch(() => console.error("DB connection error"));
