var findDisappearedNumbers = function(nums) {
    let disappearArr = [];
    for ( let i = 1; i <= nums.length; i++){
        if (!nums.includes(i) ){
            disappearArr.push(i);
        }
    }
    return disappearArr;
};

console.log(findDisappearedNumbers([3,3, 6, 4, 2]))