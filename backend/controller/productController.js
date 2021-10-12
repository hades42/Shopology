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
    console.log(req.query)
    if(req.query.categoryFilter !== '') {
      pageProducts = pageProducts + filterProducts(products, "category", req.query.categoryFilter)
    }
    if(req.query.colorFilter !== '') {
      pageProducts = pageProducts + filterProducts(products, "color", req.query.colorFilter)
    }
    if(req.query.priceFilter != '') {
      pageProducts = pageProducts + priceFilter(products, "price", req.query.priceFilter)
    }
    if(req.query.sortBy != '') {
      pageProducts = sortProducts(products, req.query.sortBy)
    }
    if(req.query.pageNum != '') {
      pageProducts = pageProducts.slice((req.query.pageNum-1)*2, req.query.pageNum*2)
    }
    console.log(pageProducts)
    res.json({
      pageProducts,
      pageCount: Math.ceil(products.length/2),
      electronicsCount: count(products, "category", "Electronics"),
      menCount: count(products, "category", "men"),
      womenCount: count(products, "category", "women"),
      sportsCount: count(products, "category", "sports"),
      babyCount: count(products, "category", "baby"),
      automobileCount: count(products, "category", "automobile"),
      booksCount: count(products, "category", "books"),
      gamesCount: count(products, "category", "games"),
      blackCount: count(products, "color", "black"),
      blueCount: count(products, "color", "blue"),
      redCount: count(products, "color", "red"),
      greenCount: count(products, "color", "green"),
      brownCount: count(products, "color", "brown"),
      hundreadCount: priceCount(products, "0", "999"),
      okCount: priceCount(products, "1000", "2499"),
      tkCount: priceCount(products, "2500", "4499"),
      thkCount: priceCount(products, "4500", "6499"),
      fkCount: priceCount(products, "6500", "9999"),
      fikCount: priceCount(products, "10000", "-1"),
    })
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

function filterProducts(products, filter) {

}

function count(products, type, value) {
  let count = 0
  for(let i=0; i<products.length; i++) {
    if(products[i][`${type}`] === value) {
        count++
    }
  }
  return count
}

function priceCount(products, min, max) {
  let count = 0
  for(let i=0; i<products.length; i++) {
    if(parseInt(products[i].price) >= parseInt(min) && parseInt(products[i].price) <= parseInt(max)) {
      count++
    }
  }
  return count
}

module.exports = {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts
};
