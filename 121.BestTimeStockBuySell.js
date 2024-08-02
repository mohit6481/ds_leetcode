var maxProfit = function(prices) {
    let min = prices[0];
    let max = prices[1];
    let profit = max - min > 0 ? max - min : 0;
    let i = 1;
    let length = prices.length;
    for (; i < length; i++) {
        max = prices[i] > max ? prices[i] : max;
        if (min > prices[i]) {
            min = prices[i]
            max = prices[i + 1]
        }
        profit = max - min > profit ? max - min : profit;
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))