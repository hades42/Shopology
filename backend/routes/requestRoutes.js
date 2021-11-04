const express = require("express");
const router = express.Router();
const {
  createRequest,
} = require("../controller/requestController");

const { protect, adminProtect } = require("../middlewares/authMiddleware");

router.route("/newSeller").post(protect, createRequest)

module.exports = router;