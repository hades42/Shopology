const express = require("express");
const router = express.Router();
const {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts,
  createProductReview,
  deleteProduct,
  updatedProduct,
  createProduct,
} = require("../controller/productController");
const { protect, adminProtect, sellerAndAdminProtect} = require("../middlewares/authMiddleware");

router.route("/:id/reviews").post(protect, createProductReview);
router.route("/trending").get(getTrendingProducts);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminProtect, deleteProduct)
  .put(protect, adminProtect, updatedProduct);
router.route("/").get(getProducts).post(protect, sellerAndAdminProtect, createProduct);
module.exports = router;
