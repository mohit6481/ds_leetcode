/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let i = 0;
  let j = 0;
  let count = 0;
  for (; i < p.length && j < s.length; i++, j++) {
    console.log(i,j)
    if (p[i] === s[j]) {
      continue;
    } else {
      if (p[i] === ".") {
        if (p[i + 1] === "*" && i + 1 === p.length) {
          return true;
        }
        continue;
      } else if (p[i] === "*") {
        while (s[j] === p[i - 1] || s[j] === '.') {
          j++;
          count++;
          console.log(count)
          if (j === s.length) {
            j--;
            count--;
            break;
          }
        }
      } else {
        if (p[i + 1] === "*") {
          i++;
          j--
          continue;
        }
        return false;
      }
    }
  }
  console.log(i, j, count)
  if (i === p.length && j === s.length) {
    return true;
  } else {
    if (j !== s.length) {
      return false;
    } else {
      while (count > 0) {
        if (p[i] === s[j - 1]) {
          count--;
          i++;
          continue;
        } else {
          if (p[i + 1] === "*") {
            continue;
          }
          return false;
        }
      }
      return count === 0  && i === p.length;
    }
  }
};

console.log(isMatch("aaa", "a*a"));
// console.log(isMatch("aa", "a*"));
// console.log(isMatch("ab", "b*ab"));
// console.log(isMatch("aab", "c*a*b"));
// console.log(isMatch("abb", "a.b"));
// console.log(isMatch("aaa", "ab*a*c*a"));
// console.log(isMatch("aaa", "ab*a*c*aa"));
