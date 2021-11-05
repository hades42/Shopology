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

  const result = await Request.find({}).populate("user","id name");

  if(result){
      res.json(result)
  } else {
      res.status(404);
      throw new Error("Couldn't get any requests")
  }

});

// @desc    Get request by id
// @route   GET /api/request/:id
// @access  admin 
const getRequestById = asyncHandler(async (req, res) => {

    const re = await Request.find(req.param.id).populate("user", "id name")

    if(re){
        res.json(re)
    } else {
        res.status(404);
        throw new Error("Couldn't find the request")
    }
})


module.exports = {
    createRequest,
    getAllRequest,
    getRequestById,
};