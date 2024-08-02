var removeElement = function(nums, val) {
    nums.forEach((element, index) => {
        if (element === val) {
            nums[index] = '_'
        }
    });
    return nums.sort().filter(el => el !== '_').length;


    // let index = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== val) {
    //         nums[index] = nums[i];
    //         index++;
    //     }
    // }
    // return index;
};

console.log(removeElement([3,2,2,3], 3))