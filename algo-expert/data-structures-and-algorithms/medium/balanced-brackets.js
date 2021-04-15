/*
Write a function that takes in a string made up of brackets and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.

A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(]).
*/

// MY SOLUTION ATTEMPT
function balancedBrackets(string) {
  const visitedArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' && visitedArray[i] !== true) {
      visitedArray[i] = true;
      let openBracketCount = 1;
      let index = i + 1;
      while (openBracketCount > 0 && index < string.length) {
        if (string[index] === '(' && visitedArray[index] !== true) {
          visitedArray[index] = true;
          openBracketCount++;
        }
        if (string[index] === ')' && visitedArray[index] !== true) {
          visitedArray[index] = true;
          openBracketCount--;
          if (openBracketCount === 0) {
            break;
          }
        }
        index++;
      }
      if (openBracketCount !== 0) {
        return false;
      }
    } else if (string[i] === '[' && visitedArray[i] !== true) {
      visitedArray[i] = true;
      let openSquareBracketCount = 1;
      let index = i + 1;
      while (openSquareBracketCount > 0 && index < string.length) {
        if (string[index] === '[' && visitedArray[index] !== true) {
          visitedArray[index] = true;
          openSquareBracketCount++;
        }
        if (string[index] === ']' && visitedArray[index] !== true) {
          visitedArray[index] = true;
          openSquareBracketCount--;
          if (openSquareBracketCount === 0) {
            break;
          }
        }
        index++;
      }
      if (openSquareBracketCount !== 0) {
        return false;
      }
    } else if (string[i] === '{' && visitedArray[i] !== true) {
      visitedArray[i] = true;
      let openCurlyBracketCount = 1;
      let index = i + 1;
      while (openCurlyBracketCount > 0 && index < string.length) {
        if (string[index] === '{' && visitedArray[index] !== true) {
          visitedArray[index] = true;
          openCurlyBracketCount++;
        }
        if (string[index] === '}' && visitedArray[index] !== true) {
          visitedArray[index] = true;
          openCurlyBracketCount--;
          if (openCurlyBracketCount === 0) {
            break;
          }
        }
        index++;
      }
      if (openCurlyBracketCount !== 0) {
        return false;
      }
    } else if (string[i] === ')' && visitedArray[i] !== true) {
      return false;
    } else if (string[i] === ']' && visitedArray[i] !== true) {
      return false;
    } else if (string[i] === '}' && visitedArray[i] !== true) {
      return false;
    }
  }
  return true;
}

// SOURCE SOLUTION
function balancedBrackets(string) {
  const openingBrackets = '([{';
  const closingBrackets = ')]}';
  const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];
  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// O(n) time | O(n) space
