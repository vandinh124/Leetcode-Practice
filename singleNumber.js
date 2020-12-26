var singleNumber = function(nums) {
    let my_map = {};
    for (let key of nums){
        if(my_map[key]){
            my_map[key]++;
        }else {
            my_map[key] =1;
        }
        console.log("my_map\n", my_map)

    }
    let keys = Object.keys(my_map);
    console.log("keys\n", keys)
    for(let key of keys){
        if(my_map[key] == 1){
            return key;
        }
    }
    return ;
};


 
console.log(singleNumber([4,1,2,1,2]))