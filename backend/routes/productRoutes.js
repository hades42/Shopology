const express = require("express");
const router = express.Router();
const {
  getTrendingProducts,
  getTopProducts,
  getProductById,
} = require("../controller/productController");

router.route("/trending").get(getTrendingProducts);
router.route("/top").get(getTopProducts);
router.route("/:id").get(getProductById);

module.exports = router;
