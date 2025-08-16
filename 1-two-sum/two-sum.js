/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let outPut = []

    // o(n*2)

    for (let i=0; i < nums.length; i++){
        for (let j= i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    outPut.push(i)
                    outPut.push(j)
                    return outPut
                }
        }
    }

};