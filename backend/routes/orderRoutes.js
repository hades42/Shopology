const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { 
    newOrder,
    //viewOrder
 } = require("../controller/orderController");

router.route("/new").post(protect, newOrder);

// needs the order id to view the order
// router.route("/view").get(viewOrder);

module.exports = router;