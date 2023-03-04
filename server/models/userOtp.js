const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userOtpSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    code: String,
    expireIn: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("userOtp", userOtpSchema);
