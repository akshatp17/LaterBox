const mongoose = require("mongoose");
const capsuleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    media: { type: String },
    date: { type: Date, default: Date.now },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    // Add other fields as necessary
  },
  { timestamps: true }
);

module.exports = mongoose.model("Capsule", capsuleSchema);
// This is a placeholder for the Capsule model. You can define the schema according to your requirements.
