var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    for (;i < (m + n); i++) {
        if (((i - j) >= m) || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j])
            j++
            nums1.pop()
        }
    }
console.log(nums1)
    // let arr = [];
    // while (i + j < m + n) {
    //     console.log(i, j)
    //     if (nums1[i] > nums2[j] || i === m) {
    //         arr.push(nums2[j]);
    //         j++;
    //     } else {
    //         arr.push(nums1[i]);
    //         i++;
    //     }
    // }
    // nums1 = arr
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]