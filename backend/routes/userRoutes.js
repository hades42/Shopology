const express = require("express");
const router = express.Router();
const {
  login,
  signup
} = require("../controller/userController");

router.route("/login").post(login);
router.route("/signup").post(user);

module.exports = router;
