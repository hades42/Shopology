const asyncHandler = require("express-async-handler");
const Request = require("../model/requestModel");
const User = require("../model/userModel");

// @desc    Request for becoming a new seller
// @route   POST /api/request/newSeller
// @access  Public
const createRequest = asyncHandler(async (req, res) => {
  const { description } = req.body;
  const user = req.user;

  const isRequestExists = await Request.find({user: user.id})

  console.log(isRequestExists)

  if(isRequestExists){
      res.status(400)
      if(isRequestExists.approved){
        throw new Error("Already request, and hase been approved")
      } else {
            throw new Error("Aleady requested, waiting for approval")
      }
  } else {

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

    const re = await Request.findById(req.params.id).populate("user", "id name")

    if(re){
        res.json(re)
    } else {
        res.status(404);
        throw new Error("Couldn't find the request")
    }
})


// @desc    Approve seller request
// @route   PUT /api/request/approve/:id
// @access  admin
// @note    :id is user id, not a request id
const approveUserRequest = asyncHandler(async (req, res) => {
    
    const user = await User.findById(req.params.id)

    if(user){

        user.isSeller = true
        await user.save()
        res.status(200)
        res.json({
            user: user._id,
            isSeller: user.isSeller
        })

    } else {
        res.status(404)
        throw new Error("User not found")
    }

})

module.exports = {
    createRequest,
    getAllRequest,
    getRequestById,
    approveUserRequest,
};