const books = require("../models/bookModel");
const authors = require("../models/authorModel");
// ##########################################createBooksData1##########################################################
const bookentry = async function (req, res) {
  let data = req.body;
  let savedData = await books.create(data);
  res.send({ booksInfo: savedData });
};
// #############################################createAuthorsData2######################################################
const authorentry = async function (req, res) {
  let data = req.body;
  let savedData = await authors.create(data);
  res.send({ authorsInfo: savedData });
};
// ####################################################getData3########################################################
const getentry = async function (req, res) {
  let allData = await authors
    .findOne({ author_name: "Chetan Bhagat" })
    .select({ author_id: 1 });
  let getBookData = await books.find({ author_id: { $eq: allData.author_id } });
  res.send({ allBookInfo: getBookData });
};
// #################################################findAuthorData4#####################################################
const getselected = async function (req, res) {
  let findAuthorName = await books.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },  //it will update the price from 50 to 100
    { new: true }     //it will return new updated document
  );
  let result = await books  
    .findOne({ name: "Two states" })
    .select({ price: 1, _id: 0 });   //from here we select only price 
    // console.log(findAuthorName)
    // console.log(result)
  let finalResult = await authors
    .findOne({ author_id: findAuthorName.author_id })
    .select({ author_name: 1, _id: 0 });  //select author name and return it
  res.send([finalResult, result]);
  // console.log(finalResult)
};

//##############################################findBook5#############################################################

const findbook = async function (req, res) {
  let allData = await books.find({ price: { $gte: 50, $lte: 100 } });

  let fetch = allData.map((x) => x.author_id);
  let newData = await authors
    .find({ author_id: fetch })
    .select({ author_name: 1, _id: 0 });
  // let authorrs = [];
  // for (let i = 0; i < allData.length; i++) {
  //   let arr = await authors.find({ author_id: allData[i].author_id });
  //   authorrs.push(arr);
  // }
  // let newData = {};
  // for (let i = 0; i < allData.length; i++) {
  //   newData[allData[i].name] = authorrs[i][0].author_name;
  // }

  res.send({ allBookInfo: newData });
};



// #################################################Export-Modules######################################################
module.exports.createBooksData = bookentry;
module.exports.createAuthorsData = authorentry;
module.exports.getAllData = getentry;
module.exports.getResult = getselected;
module.exports.findBook = findbook;
