var twoSum = function(nums, target) {
    let resultArr = [];
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target && i !=j){
                resultArr.push(i);
                resultArr.push(j);
                 return resultArr;
            }
        }
        
    }
   
};

console.log(twoSum([2, 7, 11, 15], 9))