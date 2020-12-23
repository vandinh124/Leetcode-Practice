/**
 * @param {number} x
 * @return {number}
 */

// result = 0;
// x % 10 = 123 % 10 = 3
// (123 - 3) = 120 / 10 = 12
//result = result * 10 + 3 = 3

// x = 12
// x % 10 = 12 % 10 = 2;
// result = result * 10 + 2 = 32

// x = 12 - 2 = 10 / 10 = 1 % 10 = 1
// result = result * 10 + 1


var reverse = function(x) {
    let m = Math.abs(x);
    let result = 0;
    while (m > 0){
        let remainder = m % 10;
        m = (m - remainder) / 10;
        result = result * 10 + remainder;
    }
    let rev = x < 0 ? result * -1 : result;
    return (rev>(2**31-1) || rev< -(2**31))?  0  :  rev;
}

console.log(reverse(0))