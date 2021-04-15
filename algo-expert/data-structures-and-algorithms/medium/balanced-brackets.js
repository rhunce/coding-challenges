/*

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
