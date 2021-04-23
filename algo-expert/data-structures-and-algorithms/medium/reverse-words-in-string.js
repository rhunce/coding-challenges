/*
Write a function that takes in a string of words seperated by one or more whitespaces and returns a string that has these words in reverse order. For example, given a string "tim is great," your function should return "great is tim."

For this problem, a word can contain special characters, punctuation, and numbers. The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. For example, given the string "whitespaces    4," you would be expected to return "4    whitespaces."

Note that you're not allowed to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/function.

Also note that the input string isn't guaranteed to always contain words.
*/

// MY SOLUTION (17 min)
function reverseWordsInString(string) {
  const reversedParts = [];
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      let startIdx = i - 1;
      while (startIdx >= 0 && string[startIdx] !== ' ') {
        startIdx--;
      }
      reversedParts.push(string.substring(startIdx + 1, i + 1));
      i = startIdx + 1;
    } else if (string[i] === ' ') {
      let startIdx = i - 1;
      while (startIdx >= 0 && string[startIdx] === ' ') {
        startIdx--;
      }
      reversedParts.push(string.substring(startIdx + 1, i + 1));
      i = startIdx + 1;
    }
  }

  return reversedParts.join('');
}
// O(n) time | O(n) space

// SOURCE SOLUTION
function reverseWordsInString(string) {
  const characters = [];
  for (const char of string) {
    characters.push(char);
  }
  reverseListRange(characters, 0, characters.length - 1);

  let startOfWord = 0;
  while (startOfWord < characters.length) {
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] !== ' ') {
      endOfWord++;
    }

    reverseListRange(characters, startOfWord, endOfWord - 1);
    startOfWord = endOfWord + 1;
  }
  return characters.join('');
}

function reverseListRange(list, start, end) {
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}
// O(n) time | O(n) space
