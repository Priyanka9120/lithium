

// let today=new Date()
// let day=today.getDate()

// let month =today.getMonth()
// let year =today.getFullYear()

// console.log(day);
// console.log(month);
// console.log(year);

let today =new Date()
function helper(){
    console.log("Date:"+today.getDate());
    console.log("Month:"+today.getMonth());
    console.log("year:"+today.getFullYear());
}
let getInfo={
    name:"Lithium",
    week:"W3D6",
    topic:"Basics of node_js->How to export module",}

function getBatch(){
    console.log(getInfo.name);
    console.log(getInfo.week);
    console.log(getInfo.topic);


}

module.exports.datefunction = helper

module.exports.infofunction =getBatch
//Public name