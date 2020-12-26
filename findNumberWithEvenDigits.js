var findNumbers = function(nums) {
    let count = 0;
    for ( let i = 0; i < nums.length; i++){
        let len = nums[i].toString().length
        if(parseInt(len) % 2 === 0 ){
            count++
        }
    }
    return count;
};

console.log(findNumbers([12,345,2,6,7896]))