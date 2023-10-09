const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Regular expression to validate password complexity
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!%&])[A-Za-z\d@#!%&]{6,}$/;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      // Custom validator for password requirement
      validate: {
        validator: function (value) {
          // Test the password against the regex pattern
          return passwordRegex.test(value);
        },
        message:
          "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one special character (@, #, !, %, or &).",
      },
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
