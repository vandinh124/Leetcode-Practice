var firstUniqChar = function(s) {
    const my_map = {};
    var result = -1;
    for (let key of s){
        if(my_map[key]){
            my_map[key]++
        }else {
            my_map[key] = 1;
        }
    }    
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (my_map[char] === 1) {
          return i;
        }
  }

  return result;  
};

console.log(firstUniqChar("hinhvuthuVan"))