const asyncHandler = require('express-async-handler')
const Order = require('../models/order')

//Getting all the orders
const  getOrders = asyncHandler(async(req, res) => {
    res.send('All the orders will be listed here')

})

//Creating new orders
const  postOrders = asyncHandler(async(req, res) => {
    if(!req.body) throw new Error('Please add new order')

    const {orderName, orderPrice, customerName, customerNumber, customerEmail, customerAddress} = req.body


    const newOrder = await Order.create({
        orderName, orderPrice, customerName, customerNumber, customerEmail, customerAddress
    })

    res.status(201).send({
        newOrder,
        message: 'Your order will be delivered soon!'
    })
})


const  updateOrders = asyncHandler(async(req, res) => {
    res.send('Orders  Updated')
})

// Deleting the orders
const  deleteOrders = asyncHandler(async(req, res) => {
    res.send('Orders deleted')
})

module.exports = {
    getOrders,
    postOrders,
    deleteOrders,
    updateOrders
}