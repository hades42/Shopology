const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const signup = asyncHandler(async (req, res) => {
    const body = req.body

    const user = new User({
        name: body.name,
        email: body.email,
        password: body.password 
    })

    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (error) {
        res.status(401)
        throw new Error(`Could not create new user: ${error}`);
    }
})


const getUser = (email) => {
    return User.find({})
                .then(users => users.filter(u => u.email === email)[0])
}

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await getUser(email)
    
    if(!user){
        res.status(404);
        throw new Error("Invalid username or password");
    }

    if(await user.matchPassword(password)) {
        const userForToken = {
            id: user._id,
            email: user.email
        }
        const token = jwt.sign(userForToken, process.env.SECRET)
        return res.status(200).json({ token, email: user.email, name: user.name })
    } else {
        res.status(404)
        throw new Error("Invalid username or password");
    }

})


// @desc    Fetch all products (according to pagination)
// @route   GET /api/products
// @access  Public (any one can hit this route)

module.exports = {
    login,
    signup
};
