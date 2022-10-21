const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })
// router.post('/players',function(req,res){

// const body =req.body //hold body of request 
// let players =
//    [
//        {
//            "name": "manish",
//            "dob": "1/1/1995",
//            "gender": "male",
//            "city": "jalandhar",
//            "sports": [
//                "swimming"
//            ]
//         },

//         {
//             "name": "lokesh",
//             "dob": "1/3/1990",
//             "gender": "male",
//             "city": "jhansi",
//             "sports": [
//                 "cricket"
//             ]
//          }
      
//     ] 
//     const playerDetail = players.find(player => player.name===body.name)
//     if(playerDetail){
//        return res.send({message: "player already exist" })
//     }else{
//         players.push(body)
//         return res.send(players)
//     }
// })



// {
//     "persons": [
//    {
//    "name": "PK",
//    "age": 10,
//    "votingStatus": false
// },
// {
//    "name": "SK",
//    "age": 20,
//    "votingStatus": false
// },
// {
//    "name": "AA",
//    "age": 70,
//    "votingStatus": false
// },
// {
//    "name": "SC",
//    "age": 5,
//    "votingStatus": false
// },
// {
//    "name": "HO",
//    "age": 40,
//    "votingStatus": false
// }
// ]

// }


router.post('/voting',function(req,res){
let arr =[]
    let query = req.body.persons
   let body=req.query.votingAge
 
 for(let i=0;i<query.length;i++)
 {
    // persons[i].age>18 ? arr.push(persons[i]) : "no result"
   
    if(query[i].age>body)
    {
        query[i].votingStatus=true
        arr.push(query[i])
    }
    
  
 } 
 console.log(arr)
    res.send(arr)
})

  
  
 

module.exports = router;