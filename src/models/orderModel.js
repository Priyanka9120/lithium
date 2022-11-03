const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const ProductModel = require('../models/productModel.js')
const UserModel = require('../models/userModel.js')
const orderSchema = new mongoose.Schema


({
    userId: {
        type: ObjectId,
        ref: 'dbUser'
    },
	productId: {
        type: ObjectId,
        ref: 'Product'
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: Date},
    
    { timestamps : true});

     module.exports = mongoose.model('Order', orderSchema)
