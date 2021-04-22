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

// SOURCE SOLUTION
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
// O(n^2) time | O(n) space
