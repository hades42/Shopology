const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");





const signup = asyncHandler(async (req, res, next) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        email: body.email,
        // isAdmin: body.isAdmin,
        // isSeller: body.isSeller,
        password: bcrypt.hashSync(body.password, 10)
    })

    try {
        const savedUser = await user.save()
        response.json(savedUser)
    } catch (error) {
        next(error)
    }
})


// @desc    Fetch all products (according to pagination)
// @route   GET /api/products
// @access  Public (any one can hit this route)

module.exports = {
    login, signup
};
