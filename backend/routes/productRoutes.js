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
  getProductsForSeller,
} = require("../controller/productController");
const {
  protect,
  adminProtect,
  sellerAndAdminProtect,
} = require("../middlewares/authMiddleware");

router.route("/:id/reviews").post(protect, createProductReview);
router.route("/trending").get(getTrendingProducts);
router.route("/top").get(getTopProducts);
router.route("/seller").get(protect, getProductsForSeller);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, sellerAndAdminProtect, deleteProduct)
  .put(protect, sellerAndAdminProtect, updatedProduct);
router
  .route("/")
  .get(getProducts)
  .post(protect, sellerAndAdminProtect, createProduct);
module.exports = router;
