const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await userModel.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.error("Error in loginController:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  loginUser,
};
