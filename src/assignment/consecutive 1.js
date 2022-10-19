//****************************************************Question 1******************************************************************//
router.get('/solution',function(req,res){
    const array1 = [1,2,3,5,6,7]
    let missingNumber = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] + 1 !== array1[i + 1]) {
            missingNumber = array1[i] + 1;
            break;
        }
    }
    res.send(`The missing number is ${missingNumber}`);

})