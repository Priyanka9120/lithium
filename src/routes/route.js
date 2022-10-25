const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")
const AuthorHandler = require("../handler/handler.js")   //importing module here

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)


router.post("/createNewbook", AuthorHandler.createNewbook)    //here we calling our function with public name of this function

router.get("/getNewbook", AuthorHandler.getNewbook)    //list of the book

module.exports = router;