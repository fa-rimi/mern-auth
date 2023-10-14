const User = require("../models/users");

// Test Route
const test = (req, res) => {
  res.send("API Works");
};

// Create New User
const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check for first name
    if (!firstName) {
      return res.json({
        error: "First name is required",
      });
    }

    // Check for last name
    if (!lastName) {
      return res.json({
        error: "Last name is required",
      });
    }

    // Check for password
    // if (!password || password.length < 6) {
    //   return res.json({
    //     error: "Password must be at least 6 characters long",
    //   });
    // } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    //   return res.json({
    //     error:
    //       "Password must contain at least one uppercase and one lowercase letter",
    //   });
    // } else if (!/[@#!%&]/.test(password)) {
    //   return res.json({
    //     error:
    //       "Password must contain at least one special character (@, #, !, %, or &)",
    //   });
    // } else {
    //   res.json({
    //     success: "Password is valid",
    //   });
    // }

    // Check for password
    if (!password || password.length <= 6) {
      return res.json({
        error: "Password must be at least 6 characters long",
      });
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return res.json({
        error:
          "Password must contain at least one uppercase and one lowercase letter",
      });
    }

    if (!/[@#!%&]/.test(password)) {
      return res.json({
        error:
          "Password must contain at least one special character (@, #, !, %, or &)",
      });
    }

    // Check if email exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({
        error: "Email is already in use",
      });
    }

    // Create a new user in the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    // Handle and respond with error messages
    console.error(error);
  }
};

// Log in User
const loginUser = async (req, res) => {
  
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
