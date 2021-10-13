const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

// @desc    Fetch all products (according to pagination and sorting)
// @route   GET /api/products
// @access  Public (any one can hit this route)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  let pageProducts = products;
  if (products) {
    if (req.query.search !== "") {
      pageProducts = await Product.find({
        $name: { $search: `${req.query.search}` },
      });
    }
    if (
      req.query.categoryFilter !== "" &&
      req.query.colorFilter !== "" &&
      req.query.priceFilter !== ""
    ) {
      pageProducts = filterProducts(
        products,
        "category",
        req.query.categoryFilter
      )
        .concat(filterProducts(products, "color", req.query.colorFilter))
        .concat(filterPrice(products, req.query.priceFilter));
    } else if (
      req.query.categoryFilter !== "" &&
      req.query.colorFilter !== "" &&
      req.query.priceFilter === ""
    ) {
      pageProducts = filterProducts(
        products,
        "category",
        req.query.categoryFilter
      ).concat(filterProducts(products, "color", req.query.colorFilter));
    } else if (
      req.query.categoryFilter !== "" &&
      req.query.colorFilter === "" &&
      req.query.priceFilter !== ""
    ) {
      pageProducts = filterProducts(
        products,
        "category",
        req.query.categoryFilter
      ).concat(filterPrice(products, req.query.priceFilter));
    } else if (
      req.query.categoryFilter !== "" &&
      req.query.colorFilter === "" &&
      req.query.priceFilter === ""
    ) {
      pageProducts = filterProducts(
        products,
        "category",
        req.query.categoryFilter
      );
    } else if (
      req.query.categoryFilter === "" &&
      req.query.colorFilter !== "" &&
      req.query.priceFilter !== ""
    ) {
      pageProducts = filterProducts(
        products,
        "color",
        req.query.colorFilter
      ).concat(filterPrice(products, req.query.priceFilter));
    } else if (
      req.query.categoryFilter === "" &&
      req.query.colorFilter !== "" &&
      req.query.priceFilter === ""
    ) {
      pageProducts = filterProducts(products, "color", req.query.colorFilter);
    } else if (
      req.query.categoryFilter === "" &&
      req.query.colorFilter === "" &&
      req.query.priceFilter !== ""
    ) {
      pageProducts = filterPrice(products, req.query.priceFilter);
    } else {
      pageProducts = products;
    }

    if (req.query.sortBy != "") {
      pageProducts = sortProducts(pageProducts, req.query.sortBy);
    }

    if (req.query.pageNum != "") {
      pageProducts = pageProducts.slice(
        (req.query.pageNum - 1) * 16,
        req.query.pageNum * 16
      );
    }

    res.json({
      pageProducts,
      pageCount: Math.ceil(products.length / 16),
      electronicsCount: count(products, "category", "Electronics"),
      menCount: count(products, "category", "Men"),
      womenCount: count(products, "category", "Women"),
      sportsCount: count(products, "category", "Sports"),
      babyCount: count(products, "category", "Baby"),
      automobileCount: count(products, "category", "Automobile"),
      booksCount: count(products, "category", "Books"),
      gamesCount: count(products, "category", "Games"),
      blackCount: count(products, "color", "Black"),
      blueCount: count(products, "color", "Blue"),
      redCount: count(products, "color", "Red"),
      greenCount: count(products, "color", "Green"),
      brownCount: count(products, "color", "Brown"),
      hundreadCount: priceCount(products, "0", "999"),
      okCount: priceCount(products, "1000", "2499"),
      tkCount: priceCount(products, "2500", "4499"),
      thkCount: priceCount(products, "4500", "6499"),
      fkCount: priceCount(products, "6500", "9999"),
      fikCount: priceCount(products, "10000", "-1"),
    });
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
function sortProducts(products, sortType) {
  if (sortType === "new") {
    return products.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortType === "old") {
    return products.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return 1;
      } else if (a.createdAt < b.createdAt) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortType === "popular") {
    return products.sort(function (a, b) {
      if (a.rating > b.rating) {
        return -1;
      } else if (a.rating < b.rating) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortType === "low") {
    return products.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortType === "high") {
    return products.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return products;
  }
}

function filterProducts(products, filterType, filter) {
  let pageProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i][`${filterType}`] === filter) {
      pageProducts.push(products[i]);
    }
  }
  return pageProducts;
}

function filterPrice(products, range) {
  let pageProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (range === "price1") {
      if (products[i].price >= 0 && products[i].price <= 999) {
        pageProducts.push(products[i]);
      }
    } else if (range === "price2") {
      if (products[i].price >= 1000 && products[i].price <= 2499) {
        pageProducts.push(products[i]);
      }
    } else if (range === "price3") {
      if (products[i].price >= 2500 && products[i].price <= 4999) {
        pageProducts.push(products[i]);
      }
    } else if (range === "price4") {
      if (products[i].price >= 5000 && products[i].price <= 7999) {
        pageProducts.push(products[i]);
      }
    } else if (range === "price5") {
      if (products[i].price >= 8000 && products[i].price <= 9999) {
        pageProducts.push(products[i]);
      }
    } else {
      if (products[i].price >= 10000) {
        pageProducts.push(products[i]);
      }
    }
  }
  return pageProducts;
}

function count(products, type, value) {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i][`${type}`] === value) {
      count++;
    }
  }
  return count;
}

function priceCount(products, min, max) {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (
      parseInt(products[i].price) >= parseInt(min) &&
      parseInt(products[i].price) <= parseInt(max)
    ) {
      count++;
    }
  }
  return count;
}

module.exports = {
  getTrendingProducts,
  getTopProducts,
  getProductById,
  getProducts,
};
