    var shuffle = function(nums, n) {
        const half = Math.ceil(nums.length / 2); 
        
        const firstHalf = nums.splice(0, half)
        const secondHalf = nums.splice(-half);
        
        const mixedArr = []

        for(let i = 0; i < firstHalf.length; i++){
            mixedArr.push(firstHalf[i]);
            mixedArr.push(secondHalf[i])
            }
        return mixedArr
    };