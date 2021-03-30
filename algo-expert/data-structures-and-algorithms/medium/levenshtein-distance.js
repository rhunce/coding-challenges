/*
Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.

There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.
*/

// MY NOT FULLY CORRECT SOLUTION (45 min)
function levenshteinDistance(str1, str2) {
  let str1Letters = str1.split('');
  const str2Letters = str2.split('');
  let numberOfEditOperations = 0;
  for (let i = 0; i < str2Letters.length; i++) {
    if (str1Letters[i] !== str2Letters[i] && str1Letters.length > str2Letters.length) {
      str1Letters.splice(i, 1);
      numberOfEditOperations++;
    } else if (str1Letters[i] !== str2Letters[i] && str1Letters.length < str2Letters.length) {
      str1Letters.splice(i, 0, str2Letters[i]);
      numberOfEditOperations++;
    } else if (str1Letters[i] !== str2Letters[i]) {
      str1Letters[i] = str2Letters[i];
      numberOfEditOperations++;
    }
  }
  return numberOfEditOperations;
}
// Time Complexity: O(m*n)
// Space Complexity: O(m + n)