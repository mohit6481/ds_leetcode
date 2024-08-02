/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const trimmedS = s.trim();
  let flag = false;
  let i = 0;
  let result = 0;
  if (trimmedS[0] === "-" || trimmedS[0] === "+") {
    flag = trimmedS[0] === "-";
    i++;
  }
  for (; i < trimmedS.length; i++) {
    const temp = trimmedS[i].match(/[0-9]/g);
    if (temp) {
      result = result * 10 + +temp[0];
    } else {
      break;
    }
  }
  if (result > 0x7fffffff) {
    return flag ? Math.pow(2, 31) * -1 : Math.pow(2, 31) - 1
  } else {
    return flag ? result * -1 : result;
  }
};

console.log(myAtoi("-91283472332"));
