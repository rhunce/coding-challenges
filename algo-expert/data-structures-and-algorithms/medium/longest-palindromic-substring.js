/*
Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.
*/

// MY SOLUTION (19 min)
function longestPalindromicSubstring(string) {
  let longestPal = '';
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      const newPalindrome = getPalindrome(i - 1, i, string);
      if (newPalindrome.length > longestPal.length) {
        longestPal = newPalindrome;
      }
    }
    if (string[i - 1] === string[i + 1]) {
      const newPalindrome = getPalindrome(i - 1, i + 1, string);
      if (newPalindrome.length > longestPal.length) {
        longestPal = newPalindrome;
      }
    }
  }

  return longestPal !== '' ? longestPal : string[0];
}

function getPalindrome(startIdx, endIdx, string) {
  while (
    startIdx >= 0 &&
    endIdx < string.length &&
    string[startIdx] === string[endIdx]
  ) {
    startIdx--;
    endIdx++;
  }
  return string.substring(startIdx + 1, endIdx);
}
// O(n^2) time | O(n) space
