// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler
// let today =new Date()
let lodash = require('lodash')
function formatter(){
let Name = "     Functionup       "
console.log(Name.trim());
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
}


function chunku(){

let month =["January","Febuary","March","April","May","June,","Jully","August","September","October","November","December"]
console.log(lodash.chunk(month,4));
}

function tailor(){
let odd =[1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(odd));
}

function unique()
{
    let duplicate=[1,2,3,2,3,4,5,6,1,2,3,4]
    console.log(lodash.union(duplicate))
}

function twin(){
    let array= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(array))


}
module.exports.trimer = formatter  
//public name
module.exports.chunkii = chunku
module.exports.tillu =tailor
module.exports.mystery =unique
module.exports.twinning =twin