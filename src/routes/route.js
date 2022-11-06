const express = require('express');
const router = express.Router();
const userController = require("../controllers/usercontrolleras")
const token = require("../Middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/getUserData/:userId", token.tokenValidation, userController.getUserData)

//The userId is sent by front end//

router.put("/users/:userId", userController.updateUser)
router.delete("/usersDelete/:userId", userController.deleteData)

module.exports = router;