
const mongoose = require('mongoose');   //import mongoose library =>using this library you can connect with data base.

const bookSchema = new mongoose.Schema({
    bookName: String,     //type of string
    authorName: String,
    authorId: {
        type: String,
        unique: true,
        required: true
    },
    
    category: String, // like Action and Adventure or classics or comic or mystery or fantasy or horror


    year: Number,

}, { timestamps: true });       //this will automated me=> (created at) (updated at) =>  this show automatically when we use when we want to know when it was created aur updated at.
                   

module.exports = mongoose.model('Author', bookSchema) //authors(connecton name)=it convert singular into plural (name inside database)  
                
//mongoose.model basicnoally a syntax(boilerplate)

