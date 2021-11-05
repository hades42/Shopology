const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let decoded;
      if (process.env.NODE_ENV === "test") {
        decoded = jwt.verify(token, "testing");
      } else {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      }
      // Get thing without password
      let info = await User.findById(decoded.id).select("-password");
      req.user = info;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, please login again");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, please login again");
  }
});

const sellerAndAdminProtect = (req, res, next) => {
  if (req.user && (req.user.isSeller || req.user.isAdmin)) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as seller");
  }
};

const adminProtect = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as admin");
  }
};

module.exports = {
  protect,
  adminProtect,
  sellerAndAdminProtect,
};
