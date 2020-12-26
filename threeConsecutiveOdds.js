var threeConsecutiveOdds = function(arr) {
    let result = false;
    for ( let i = 0; i < arr.length - 2; i++){
        if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0){
            result = true;
            break;
        }    
    } 
    return result;  
};

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))