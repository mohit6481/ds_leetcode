/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length;
  let result = '';
  const isPalindrome = (left, right) => {
    while (left >= 0 && right < length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }
  const checkPalindrome = (i) => {
    const palindrome1 = isPalindrome(i, i + 1);
    const palindrome2 = isPalindrome(i, i);
    if (palindrome1.length > result.length) {
      result = palindrome1;
    }
    if (palindrome2.length > result.length) {
      result = palindrome2;
    }
  }
  let i = Math.floor((length - 1)/2);
  let j = i;
  for (; i >= 0; i--, j++) {
    checkPalindrome(i);
    checkPalindrome(j)
  }
  return result;
}


// var longestPalindrome = function (s) {
//   let size = s.length;
//   // let obj = {};
//   const isPalindrome = (str) => {
//     let i = 0;
//     for (; i < str.length / 2; i++) {
//       if (str[i] === str[str.length - 1 - i]) {
//         continue;
//       } else {
//         break;
//       }
//     }
//     if (i === Math.ceil(str.length / 2)) {
//       return true;
//     }
//     return false;
//   };

//   while (size > 0) {
//     let index1 = 0;
//     let subStr = "";
//     while (index1 + size - 1 < s.length) {
//       subStr = s.substring(index1, index1 + size - 1 + 1);
//       // if (!obj[subStr] && isPalindrome(subStr)) return subStr;
//       if (isPalindrome(subStr)) return subStr;
//       else {
//         // obj[subStr] = true;
//         index1++;
//       }
//     }
//     size--;
//   }
//   return false;
// };

const s =
"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// console.log(longestPalindrome(s));
// console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("caba"));
