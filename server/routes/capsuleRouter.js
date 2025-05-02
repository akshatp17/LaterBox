const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    // Logic to get all capsules
    res.status(200).json({ message: "Get all capsules" });
  })
  .post((req, res) => {
    // Logic to create a new capsule
    res.status(201).json({ message: "Capsule created" });
  });

router.route("/:id").get((req, res) => {
  // Logic to get a capsule by ID
  const capsuleId = req.params.id;
  res.status(200).json({ message: `Get capsule with ID: ${capsuleId}` });
});

module.exports = router;
