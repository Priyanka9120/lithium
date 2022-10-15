const express = require('express');
const router = express.Router();///test-you
//importing a custom module

const logger = require('../logger/logger.js')
const helper= require('../utill/helper.js')
const formatter = require('../validator/formatter.js')

//importing external package


router.get('/test-me', function (req, res) {
    logger.myfuncton()
    helper.datefunction()
    helper.infofunction()
    formatter.trimer() 
    formatter.chunkii()
    formatter.tillu()
    formatter.mystery()
    formatter.twinning()
    

    //Calling the components of a different custom module
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

