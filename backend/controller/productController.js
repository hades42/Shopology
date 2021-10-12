const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

// @desc    Fetch all products (according to pagination and sorting)
// @route   GET /api/products
// @access  Public (any one can hit this route)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  let pageProducts = products
  console.log(req.query)
  if (products) {
    if(Object.keys(req.query)[0] === 'pageNum') {
      pageProducts = products.slice((parseInt(Object.values(req.query)[0])-1)*2, parseInt(Object.values(req.query)[0])*2)
    } else {
      pageProducts = sortProducts(products, Object.values(req.query)[0])
    }
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

// Sorting Products
function sortProducts (products, sortType) {
  if(sortType === 'new') {
    return products.sort(function(a, b) {
      if(a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if(sortType === 'old') {
    return products.sort(function(a, b) {
      if(a.createdAt > b.createdAt) {
        return 1
      } else if (a.createdAt < b.createdAt) {
        return -1
      } else {
        return 0
      }
    })
  } else if(sortType === 'popular') {
    return products.sort(function(a, b) {
      if(a.rating > b.rating) {
        return -1
      } else if (a.rating < b.rating) {
        return 1
      } else {
        return 0
      }
    })
  } else if(sortType === 'low') {
    return products.sort(function(a, b) {
      if(a.price > b.price) {
        return 1
      } else if (a.price < b.price) {
        return -1
      } else {
        return 0
      }
    })
  } else if(sortType === 'high') {
    return products.sort(function(a, b) {
      if(a.price > b.price) {
        return -1
      } else if (a.price < b.price) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return products
  }
}

module.exports = {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts
};
