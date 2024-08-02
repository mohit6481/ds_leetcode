/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let result = '';
  let i = 0;
  let obj = {};
  let zig = 0;
  let zag = 0;
  while(i < s.length) {
    while (i < s.length && zig < numRows) {
      obj[zig] = obj[zig] ? obj[zig] + s[i] : s[i];
      zig++;
      i++;
    } 
    zig = 0;
    while (i < s.length && zag < numRows - 2) {
      const temp = numRows - 2 - zag
      obj[temp] = obj[temp] ? obj[temp] + s[i] : s[i];
      zag++;
      i++;
    }
    zag = 0;
  }

  Object.keys(obj).forEach(el => result+=obj[el])
  return result;
};

console.log(convert('PAYPALISHIRING', 4))