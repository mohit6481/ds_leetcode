var rotate = function (nums, k) {
    // let current = nums[0]
    // let next;
    // let i = 0;
    // let j = 0;
    // const length = nums.length;
    // for (; j < k; j++) {
    //     for (; i < length; i++) {
    //         if (i + 1 === length) {
    //             nums[0] = current
    //         } else {
    //             next = nums[i + 1];
    //             nums[i + 1] = current;
    //             current = next;
    //         }
    //     }
    //     i = 0;
    // }
    k = k % nums.length;
    let arr = []
    for (let i = 0; i < k; i ++) {
        arr.push(nums.pop())
    }
    nums.splice(0, 0, ...arr.reverse())
};

rotate([1, 2, 3, 4, 5, 6], 4)