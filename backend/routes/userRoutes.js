const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  getUserProfile,
  updateUserprofile,
} = require("../controller/userController");
const { protect } = require("../middlewares/authMiddleware");

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserprofile);
router.route("/login").post(login);
router.route("/register").post(signup);

module.exports = router;
