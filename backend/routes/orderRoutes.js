const express = require("express");
const router = express.Router();
const { protect, adminProtect } = require("../middlewares/authMiddleware");
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDeliver,
} = require("../controller/orderController");

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, adminProtect, getOrders);
router.route("/myorder").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, adminProtect, updateOrderToDeliver);

module.exports = router;
