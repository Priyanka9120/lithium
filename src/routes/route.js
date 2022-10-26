const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
// //########################################################1st Api################################################################
// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
//################################################# 2nd API###########################################################################################################################
// router.get("/bookList", BookController.list)
// //###################################################################3rd Api#########################################################################
// router.post("/getBooksInYear", BookController.query)
// //######################################################################4th Api################################################################################################################
router.post("/getParticularBooks",BookController.getany)
// //######################################################################5th Api#################################################################################
router.get("/getXINRBooks ",BookController.Indian)
// // //######################################################################6th Api#################################################################################
router.get("/getRandomBooks ",BookController.ranbook) 

module.exports = router;