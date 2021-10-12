const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

// @desc    Fetch all products (according to pagination)
// @route   GET /api/products
// @access  Public (any one can hit this route)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  if (products) {
    const pageProducts = products.slice((parseInt(Object.values(req.query)[0])-1)*2, parseInt(Object.values(req.query)[0])*2)
    console.log((parseInt(Object.values(req.query)[0])-1)*2, parseInt(Object.values(req.query)[0])*2)
    res.json({pageProducts, pageCount: Math.ceil(products.length/2)});
  } else {
    throw new Error("Products not found");
  }
});

// @desc    Fetch trending products
// @route   GET /api/products/trending
// @access  Public (any one can hit this route)
const getTrendingProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 });

  if (products) {
    res.json(products.slice(0, 8));
  } else {
    throw new Error("Products not found");
  }
});

// @desc    Fetch top seller products
// @route   GET /api/products/top
// @access  Public (any one can hit this route)
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 });

  if (products) {
    res.json(products.slice(0, 4));
  } else {
    throw new Error("Products not found");
  }
});

// @desc    Fetch product by ID
// @route   GET /api/products/:id
// @access  Public (any one can hit this route)
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts
};
