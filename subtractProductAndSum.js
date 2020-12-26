var subtractProductAndSum = function(n) {
    let numArr = n.toString().split('')
    let sum = 0;
    let product = 1;
    
    numArr.forEach(e => {
        e = parseInt(e)
        sum += e;
        product *= e;
    })

    return product - sum
};

console.log(subtractProductAndSum(234))