const express = require("express");
const router = express.Router();
const {
  createRequest,
  getAllRequest,
} = require("../controller/requestController");

const { protect, adminProtect } = require("../middlewares/authMiddleware");

router.route("/newSeller").post(protect, createRequest)
router.route("/all").get(protect, adminProtect, getAllRequest)

module.exports = router;