const express = require("express");
const router = express.Router();
const {
  registerUser,
  test,
  loginUser,
} = require("../controllers/authController");

// Routes
router.get("/test", test);
router.post("/SignUp", registerUser);
router.post("/SignIn", loginUser);

// Exports
module.exports = router;
