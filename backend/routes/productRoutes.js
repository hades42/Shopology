const express = require("express");
const router = express.Router();
const {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts,
  createProductReview,
} = require("../controller/productController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/:id/reviews").post(protect, createProductReview);
router.route("/trending").get(getTrendingProducts);
router.route("/top").get(getTopProducts);
router.route("/:id").get(getProductById);
router.route("/").get(getProducts);
module.exports = router;
