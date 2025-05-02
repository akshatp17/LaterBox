const express = require("express");
const router = express.Router();

const {
  createCapsule,
  getAllCapsules,
  getCapsuleById,
} = require("../controllers/capsuleController");

router.route("/").get(getAllCapsules).post(createCapsule);

router.route("/:id").get(getCapsuleById);

module.exports = router;
