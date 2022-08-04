// Given an array nums of size n, return the majority element.
//
// 	The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function(nums) {
    let answer = 0;
    if (nums.length===1) {return nums[0]}
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], Number(map.get(nums[i])) + 1 )
            if (map.get(nums[i]) > nums.length /2) answer = nums[i]
            continue;
        }
        map.set(nums[i], 1);
    }
    return answer
};