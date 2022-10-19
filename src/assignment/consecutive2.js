
//*********************************************Question 2***************************************************************** */
router.get('/missingNumber2', (req, res) => {
    const arr = [33, 34, 35, 37, 38];
    let missingNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            missingNumber = arr[i] + 1;
            break;
        }
    }
    res.send(`The missing number is ${missingNumber}`);
})
