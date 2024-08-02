/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length;
    let jumpCount = 0;
    if (nums.length === 1) return jumpCount;

    for (let i = 0; i < len;) {
        jumpCount++;
        if (i + nums[i] >= len - 1) return jumpCount;
        let max = i + 1;
        for (let j = i + 2; j <= i + nums[i]; j++) {
            if (nums[j] >= nums[max]) {
                max = j;
            }
        }
        // if (nums[max] > nums[i]) i = max;
        // else i += nums[i]
        i = max;
        while(nums[i] === 0) {
            i--;
        }
    }

    return jumpCount
};

console.log(canJump([4,1,1,3,1,1,1]))
console.log(canJump([2,3,1,1,4]))
console.log(canJump([2,3,1,2,0,4]))
console.log(canJump([2,3,0,1,4]))
console.log(canJump([2,0,0]))
console.log(canJump([0]))
console.log(canJump([10,9,8,7,6,5,4,3,2,1,1,0]))
console.log(canJump([1,2,3]))
console.log(canJump([7,1,5,3,6,4,1,1,1]))