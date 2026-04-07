// Given an array of integers nums and an integer target
// return the indeces of numbers such that they add up to the target

// [2,7,11,15] target = 9 result => [0,1]
// 2+7, 2+11, 2+15, 7+11, 7+15, 11+15
// 9, 13, 17, 18, 22, 26
// result => [0, 1]


function twoSum(nums, target){
    for(let i = 0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
}

const res = twoSum([2,7,11,15], 18);
console.log(res);