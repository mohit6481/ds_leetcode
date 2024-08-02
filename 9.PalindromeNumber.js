/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let result = 0;
  let temp = x;
  while (temp > 0) {
    result = result * 10 + temp % 10;
    temp = Math.floor(temp / 10);
  }
  return x >= 0 && result === x;
};

isPalindrome(121)