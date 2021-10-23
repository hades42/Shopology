const express = require("express");
const router = express.Router();
const {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts,
  createProductReview,
  deleteProduct,
} = require("../controller/productController");
const { protect, adminProtect } = require("../middlewares/authMiddleware");

router.route("/:id/reviews").post(protect, createProductReview);
router.route("/trending").get(getTrendingProducts);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminProtect, deleteProduct);
router.route("/").get(getProducts);
module.exports = router;
