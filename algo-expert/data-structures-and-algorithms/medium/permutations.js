/*

*/

// MY SOLUTION
function getPermutations(array) {
  if (array.length === 0) {
    return [];
  }
  const permutations = [];
  getAllPermutations(array, permutations);
  return permutations;
}
// O(n^2) time ? | O(n) space

function getAllPermutations(numbers, container, permutation = []) {
  if (permutation.length === numbers.length) {
    container.push(permutation.slice());
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (permutation.indexOf(numbers[i]) === -1) {
      permutation.push(numbers[i]);
      getAllPermutations(numbers, container, permutation);
      permutation.pop();
    }
  }
}
