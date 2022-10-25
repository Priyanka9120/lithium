const AuthorSchema = require("../Books/Bschema.js")     //using this we can interact with database

const createNewbook = async function (req, res) {
    let author = req.body
    let saveAuthordata =  await AuthorSchema.create(author)  //time consuming->stored in queue stack
    res.send({ msg: saveAuthordata })
}

const getNewbook = async function (req, res) {
    let allAuthors = await AuthorSchema.find()
    res.send({ msg: allAuthors })
}

module.exports.createNewbook = createNewbook
module.exports.getNewbook = getNewbook