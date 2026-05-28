const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true, // ✅ fixed
      trim: true,     // optional (removes extra spaces)
    },
    email: {
      type: String,
      required: true, // ✅ fixed
      unique: true,
      lowercase: true, // optional (store in lowercase)
      trim: true,
    },
    password: {
      type: String,
      required: true, // ✅ recommended
    },
  },
  {
    timestamps: true, // ✅ fixed
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;