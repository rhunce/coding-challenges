/*

*/

// MY SOLUTION (18 min)
function staircaseTraversal(height, maxSteps) {
  const waysToGetToTop = [0];
  staircaseTraversalHelper(height, maxSteps, waysToGetToTop);
  return waysToGetToTop[0];
}

function staircaseTraversalHelper(stepsLeft, maxSteps, waysToGetToTop) {
  if (stepsLeft === 0) {
    waysToGetToTop[0]++;
    return;
  }
  for (let i = 1; i <= maxSteps; i++) {
    if (stepsLeft - i >= 0) {
      const stepsRemaining = stepsLeft - i;
      staircaseTraversalHelper(stepsRemaining, maxSteps, waysToGetToTop);
    }
  }
}
// O() time ??? | O(h) space ???
// h = height
