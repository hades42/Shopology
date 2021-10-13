const asyncHandler = require("express-async-handler");
const Order = require("../model/orderModel")

// @desc    place new order in the DB 
// @route   POST /api/order/new
// @access  Private
const newOrder = asyncHandler(async (req, res) => {
    const body = req.body

    const order = await Order.create({
        user: body.user,
        orderItems: body.orderItems,
        shippingAddress: body.shippingAddress,
        paymentMethod: body.paymentMethod,
        paymentResult: null,
        taxPrice: body.taxPrice,
        shippingPrice: body.shippingPrice,
        totalPrice: body.totalPrice,
        isPaid: false,
        paidAt: null,
        isDelivered: false,
        deliveredAt: null,
    })
    
    try {
        const savedOrder = await order.save()
        res.json(savedOrder)
    } catch (error) {
        res.status(401)
        throw new Error(`Could not plaece the new order: ${error}`);
    }
})

module.exports = {
    newOrder
};