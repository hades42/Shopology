const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  getUserProfile,
} = require("../controller/userController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/profile").get(protect, getUserProfile);
router.route("/login").post(login);
router.route("/register").post(signup);

module.exports = router;
