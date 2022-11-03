const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const UserProduct = require('../controllers/productController')
const userOrder = require('../controllers/orderController')
const asMiddleware = require('../middlewares/asmiddleware')


router.post("/createUser", asMiddleware.headerValidation, UserController.createUser)

router.post("/createProduct",UserProduct.createProduct)

router.post("/createOrder",asMiddleware.headerValidation,asMiddleware.userValidation,asMiddleware.productValidation,userOrder.createOrder)

module.exports = router;