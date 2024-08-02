var removeDuplicates = function(nums) {
    // let index = 0;
    // let obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]] === undefined) {
    //         nums[index] = nums[i];
    //         index++;
    //     }
    //     obj[nums[i]] = nums[i]
    // }
    // return index;

    let i = 1;
    let j = 1;
    const length = nums.length
    for(; i < length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return j;
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3, 4]))