var maxProfit = function(prices) {
    let max = 0;
    let start = prices[0];
    let length = prices.length;

    for(let i = 0; i < length; i ++) {
        if (prices[i] > start) {
            max += prices[i] - start;
        }
        start = prices[i];
    }

    return max;
};

// console.log(maxProfit([7, 1, 5, 4, 5, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))