const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../utils/generateToken");
const validator = require("validator");

// @desc    Register a new user
// @route   POST /api/user
// @access  Public
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Please provide valid email");
  }
  if (!validator.isStrongPassword(password)) {
    res.status(400);
    throw new Error(
      "At least 8 characters—the more characters, the better. \nA mixture of both uppercase and lowercase letters. A mixture of letters and numbers. Inclusion of at least one special character, e.g., ! @ # ? ]"
    );
  }

  console.log("is password strong: " + validator.isStrongPassword(password));
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
      shippingAddress: user.shippingAddress,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
      shippingAddress: user.shippingAddress,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
      shippingAddress: user.shippingAddress,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserprofile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const { address, city, postalCode, state } = req.body;
    if (address) {
      user.shippingAddress.address = address;
    }
    if (city) {
      user.shippingAddress.city = city;
    }
    if (postalCode) {
      user.shippingAddress.postalCode = postalCode;
    }
    if (state) {
      user.shippingAddress.state = state;
    }
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isSeller: updatedUser.isSeller,
      shippingAddress: updatedUser.shippingAddress,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(401);
    throw new error("user not found");
  }
});

// @desc    update user address
// @route   PUT /api/users/profile
// @access  private
//const updateUserAddress = asyncHandler(async (req, res) => {
//const user = await User.findById(req.user._id);
//const { address, city, postalCode, state } = req.body;

//if (user) {
////user.name = req.body.name || user.name;
////user.email = req.body.email || user.email;
////if (req.body.password) {
////user.password = req.body.password;
////}
//user.shippingAddress.address = address;
//user.shippingAddress.city = city;
//user.shippingAddress.postalCode = postalCode;
//user.shippingAddress.state = state;
//const updatedUser = await user.save();

//res.status(200).json({
//_id: updatedUser._id,
//name: updatedUser.name,
//email: updatedUser.email,
//isAdmin: updatedUser.isAdmin,
//token: generateToken(updatedUser._id),
//});
//} else {
//res.status(401);
//throw new error("user not found");
//}
//});

module.exports = {
  login,
  signup,
  getUserProfile,
  updateUserprofile,
};
