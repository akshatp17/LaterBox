const userModel = require("../models/userModel");

const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await userModel.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in getUserByUsername:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await userModel.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in getUserById:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getUserByUsername,
  getUserById,
};
