var singleNumber = function(nums) {
    let my_map = {};
    for (let key of nums){
        if(my_map[key]){
            my_map[key]++;
        }else {
            my_map[key] =1;
        }
    }
    let keys = Object.keys(my_map);
    for(let key of keys){
        if(my_map[key] == 1){
            return key;
        }
    }
    return ;
};

 
console.log(singleNumber([4,1,2,1,2]))