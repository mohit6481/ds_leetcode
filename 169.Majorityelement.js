var majorityElement = function(nums) {
    let obj = {};
    const length = nums.length
    let i = 0;
    for (; i < length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
        if (obj[nums[i]] > length/2) {
            return nums[i]
        }
    }
};