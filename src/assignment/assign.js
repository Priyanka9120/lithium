const arr1 =[1,2,3,4,5,7,8]
function missing(arr1){
    let N= arr1.length+1  //7+1=8
    let add=N*(N+1)  //8*9=72    becuse 1 number is missing
    add=add/2    //72/2=36
    let result=0   

    for(let i=0;i<arr1.length;i++){
        result=result+arr1[i] //30   

    }
    return(add-result);  //36-30=6
}
missing()



var arr2 =[33,34,35,37,38,39]
function missingRandom(arr2){
    let N=arr2.length+1
    let first =arr2[0]
let second = arr2[arr2.length-1]
 
console.log(first);      
console.log(second);
console.log(N);
    let sum= N*(first+second)
    sum=sum/2
    let result=0
    for(let i=0;i<arr2.length;i++)
    {
        result=result+arr2[i];

    }
console.log(sum-result);

}
missingRandom()



module.exports.miss =missing
module.exports.random =missingRandom