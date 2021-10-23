const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  getUserProfile,
  updateUserprofile,
  getUsers,
  deleteUser,
  updateUserbyId,
  getUserbyId,
} = require("../controller/userController");
const { protect, adminProtect } = require("../middlewares/authMiddleware");

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserprofile);
router.route("/login").post(login);
router.route("/register").post(signup);
router.route("/getusers").get(protect, adminProtect, getUsers);
router.route("/deleteUser/:id").delete(protect, adminProtect, deleteUser);
router.route("/updateUser/:id").put(protect, adminProtect, updateUserbyId);
router.route("/:id").get(protect, adminProtect, getUserbyId);
module.exports = router;
