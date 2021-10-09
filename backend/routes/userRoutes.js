const express = require("express");
const router = express.Router();
const {
  signup,
  login
} = require("../controller/userController");

router.route("/login").post(signup);
router.route("/signup").post(login);

module.exports = router;
