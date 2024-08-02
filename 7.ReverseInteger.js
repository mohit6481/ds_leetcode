/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let flag = false;
  if (x < 0) {
    flag = true;
    x = Math.abs(x);
  }
  while (x > 0) {
    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return result > 0x7FFFFFFF ? 0 : flag ? result * -1 : result;
};

console.log(reverse(-120));
