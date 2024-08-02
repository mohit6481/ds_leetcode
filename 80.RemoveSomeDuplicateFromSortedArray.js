var removeDuplicates = function(nums) {
    let index = 0;
    let obj = {};
    const length = nums.length
    for (let i = 0; i < length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
        if (obj[nums[i]] <= 2) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;

    // let i = 1;
    // let j = 1;
    // const length = nums.length
    
    // for(; i < length; i++) {
    //     if(nums[i] !== nums[i - 1]) {
    //         nums[j] = nums[i]
    //         j++
    //     }
    // }
    // return j;
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3, 4]))