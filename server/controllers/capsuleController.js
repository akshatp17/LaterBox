const capsule = require("../models/capsuleModel");

const createCapsule = async (req, res) => {
  try {
    const { title, description, media, date, status, privacy } = req.body;
    const userId = req.body.userId;

    const newCapsule = new capsule({
      title,
      description,
      media,
      date,
      status,
      privacy,
      userId,
    });

    await newCapsule.save();
    res.status(201).json({
      success: true,
      message: "Capsule created successfully",
      capsule: newCapsule,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating capsule" });
  }
};

const getAllCapsules = async (req, res) => {
  try {
    const capsules = await capsule.find({ userId: req.body.userId });
    res.status(200).json({
      success: true,
      capsules,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching capsules" });
  }
};

const getCapsuleById = async (req, res) => {
  try {
    const capsuleId = req.params.id;
    const capsuleData = await capsule.findById(capsuleId);
    if (!capsuleData) {
      return res
        .status(404)
        .json({ success: false, message: "Capsule not found" });
    }
    res.status(200).json({ success: true, capsule: capsuleData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching capsule" });
  }
};

module.exports = {
  createCapsule,
  getAllCapsules,
  getCapsuleById,
};
