const UserModel = require('../models/userModel.js')

//*************************************************create user*************************************************************************************//
const createUser = async function (req, res ){
    let user = req.body
    let storeUser = await UserModel.create(user)
    res.send({msg: storeUser})}

    module.exports.createUser = createUser