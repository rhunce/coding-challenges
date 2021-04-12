/*

*/

// MY SOLUTION (22 min)
function getPermutations(array) {
  if (array.length === 0) {
    return [];
  }
  const permutations = [];
  getAllPermutations(array, permutations);
  return permutations;
}
// O(n^2) time ? | O(n) space

function getAllPermutations(numbers, permutations, permutation = []) {
  if (permutation.length === numbers.length) {
    permutations.push(permutation.slice());
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (permutation.indexOf(numbers[i]) === -1) {
      permutation.push(numbers[i]);
      getAllPermutations(numbers, permutations, permutation);
      permutation.pop();
    }
  }
}

// SOURCE SOLUTION 1
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}
// Upper bound: O(n! n^2) time | O(n! n) space
// Roughly: O(n! n) time | O(n! n) space

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

// SOURCE SOLUTION 2
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}
// O(n! n) time | O(n! n) space

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
