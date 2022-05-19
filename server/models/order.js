const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderName: {
        type: String,
        required : true
    },
    orderPrice : {
        type : String,
        required : true
    },
    customerName: {
        type : String,
        required : true
    },
    customerNumber : {
        type : String,
        required : true
    },
    customerEmail : {
        type : String,
        required : true
    },
    customerAddress : {
        type : String,
        required : true
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order