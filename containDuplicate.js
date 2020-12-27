var containsDuplicate = function(nums) {
    const my_map = {};
     for (let key of nums){
        if(my_map[key]){
            my_map[key]++;
        }else {
            my_map[key] =1;
        }
    }
    
  let keys = Object.keys(my_map);
    for(let key of keys){
        if(my_map[key] >= 2){
            return true;
        }
    }
    return false;

};
console.log(containsDuplicate([1,2,3,1,3,5]))