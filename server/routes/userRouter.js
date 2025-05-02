const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    // Logic to get all capsules
    res.status(200).json({ message: "Get all users" });
  })
  .post((req, res) => {
    // Logic to create a new capsule
    res.status(201).json({ message: "User created" });
  });

module.exports = router;
