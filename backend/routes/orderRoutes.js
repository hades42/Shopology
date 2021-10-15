const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { addOrderItems } = require("../controller/orderController");

router.route("/").post(protect, addOrderItems);

module.exports = router;

