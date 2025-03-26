const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const User = require("./models/user");

const app = express();
app.use(express.json());

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`Server is up and running on port ${port}`)
    );
  })
  .catch(() => console.error("DB connection error"));

app.post("/api/signup", async (req, res) => {
  try {
    //   await User.insertOne(req.body);
    const user = new User(req.body);
    user.save();
    res.send("User is registered succcessfully!!");
  } catch (error) {
    res.status(400).send("Error while registering user")
  }
});
