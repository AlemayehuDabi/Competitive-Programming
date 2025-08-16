/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numString = x.toString()
    if(numString === numString.split("").reverse().join("")){
        return true
    }
    return false
};

