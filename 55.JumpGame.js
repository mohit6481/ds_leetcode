/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let i = 0;
    let len = nums.length;
    if (nums[0] === 0 && nums.length === 1) return true;

    while(i < len) {
        if (nums[i] !== 0 ) {
            i = i + nums[i];
        } else if (nums[i] === 0) {
            let j = i - 1;
            let count = 1;
            while (j > 0) {
                if (nums[j] > count) {
                    break;
                } else {
                    j--;
                    count++;
                }
            }
            if (j > 0) {
                i = j + nums[j];
            }
            else break;
        };
    }

    return i >= len - 1;
};

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([2,0,0]))
console.log(canJump([2,0,0,0]))
console.log(canJump([0]))
console.log(canJump([0, 1]))
console.log(canJump([1,2,3]))