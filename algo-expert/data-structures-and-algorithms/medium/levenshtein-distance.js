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

// SOURCE SOLUTION 1
function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}
// Time Complexity: O(m*n)
// Space Complexity: O(m*n)

// SOURCE SOLUTION 2 (Optimal)
function levenshteinDistance(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];
}
// Time Complexity: O(m*n)
// Space Complexity: O(min(m, n))