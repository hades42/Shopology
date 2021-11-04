const asyncHandler = require("express-async-handler");
const Request = require("../model/requestModel");

// @desc    Request for becoming a new seller
// @route   POST /api/request/newSeller
// @access  Public
const createRequest = asyncHandler(async (req, res) => {
  const { description } = req.body;
  const user = req.user;

  const newRequest = {
      user: user._id,
      description: description,
  }

  const result = await Request.create(newRequest);

  if(result){
      res.json(result)
  } else {
      res.status(404);
      throw new Error("Couldn't create new request")
  }

});

// @desc    Get all the requests
// @route   POST /api/request/all
// @access  admin
const getAllRequest = asyncHandler(async (req, res) => {

  const result = await Request.find({});

  if(result){
      res.json(result)
  } else {
      res.status(404);
      throw new Error("Couldn't get any requests")
  }

});


module.exports = {
    createRequest,
    getAllRequest,
};