/*
Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

Your function should return a list of anagram groups in no particular order.
*/

// BRUTE FORCE (25 min)
function groupAnagrams(words) {
  const anagrams = [];
  const alreadyGrouped = [];
  for (let i = 0; i < words.length; i++) {
    // O(n)
    const group = [];
    if (alreadyGrouped.indexOf(i) !== -1) continue; // O(n)
    group.push(words[i]);
    for (let j = i + 1; j < words.length; j++) {
      // O(n)
      if (areAnagrams(words[i], words[j])) {
        // O(m, o) ???
        group.push(words[j]);
        alreadyGrouped.push(j);
      }
    }
    anagrams.push(group);
  }
  return anagrams;
}

function areAnagrams(word1, word2) {
  const word1Cache = {};
  for (let i = 0; i < word1.length; i++) {
    if (word1Cache[word1[i]] === undefined) {
      word1Cache[word1[i]] = 1;
    } else {
      word1Cache[word1[i]]++;
    }
  }
  for (let i = 0; i < word2.length; i++) {
    if (word1Cache[word2[i]] === undefined) {
      return false;
    } else {
      word1Cache[word2[i]]--;
    }
  }
  for (const letter in word1Cache) {
    if (word1Cache[letter] !== 0) {
      return false;
    }
  }
  return true;
}
// O(_) time ??? | O(n*m) space
