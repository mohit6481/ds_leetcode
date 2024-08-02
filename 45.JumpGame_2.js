/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length;
    let jumpCount = 0;
    let max;
    if (len === 1) return jumpCount;

    for (let i = 0; i < len;) {
        max = i + nums[i];
        jumpCount++;
        if (max >= len - 1) return jumpCount;

        let tempMax = max + nums[max];
        let j = i + 1;
        for (;j <= max ; j++) {
            if (nums[j] + j >= tempMax) {
                tempMax = nums[j] + j; 
                i = j;
            }
        }
        i = nums[i] + i > nums[max] + max ? i : max
    }

    return jumpCount;
};

console.log(canJump([4,1,1,3,1,1,1])) //2
console.log(canJump([2,3,1,1,4])) //2
console.log(canJump([2,3,1,2,0,4])) //3
console.log(canJump([2,3,0,1,4])) //2
console.log(canJump([2,0,0])) //1
console.log(canJump([0])) //0
console.log(canJump([10,9,8,7,6,5,4,3,2,1,1,0])) //2
console.log(canJump([1,2,3])) //2
console.log(canJump([7,1,5,3,6,4,1,1,1])) //2
console.log(canJump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3])) //2
console.log(canJump([5,4,0,1,3,6,8,0,9,4,9,1,8,7,4,8])) //3