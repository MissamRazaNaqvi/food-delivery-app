const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");

// ✅ REGISTER
async function userRegister(req, res) {
  try {
    const { fullName, email, password } = req.body;

    // Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password (10 salt rounds)
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create user
    const user = await userModel.create({
      fullName,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
}
async function userLogin(req, res) {

}

module.exports = { userRegister, userLogin };