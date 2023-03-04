const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URL;

mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Cannot connect to the server!");
    } else {
      console.log("Connected to the server!");
    }
  }
);