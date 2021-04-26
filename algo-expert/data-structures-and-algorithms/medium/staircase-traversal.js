/*
You're given two positive integers representing the height of a staircase and the maximum number of steps that you can advance up the staircase at a time. Write a function that returns the number of ways in which you can climb the staircase.

For example, if you were given a staircase of height = 3 and maxSteps = 2, you could climb the staircase in 3 ways. You could take 1 step, 1 step, then 1 step, you could also take 1 step, then 2 steps, and you could take 2 steps, then 1 step.

Note that maxSteps <= height will always be true.
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

// SOURCE SOLUTION 1
function staircaseTraversal(height, maxSteps) {
  if (height <= 1) return 1;
  let numberOfWays = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += staircaseTraversal(height - step, maxSteps);
  }
  return numberOfWays;
}
// O(k^n) time | O(n) space
// n = height, k = maxSteps

// SOURCE SOLUTION 2
function staircaseTraversal(height, maxSteps, memoize = { 0: 1, 1: 1 }) {
  if (height in memoize) return memoize[height];
  let numberOfWays = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numberOfWays += staircaseTraversal(height - step, maxSteps, memoize);
  }
  memoize[height] = numberOfWays;

  return numberOfWays;
}
// O(n*k) time | O(n) space
// n = height, k = maxSteps

// SOURCE SOLUTION 3
function staircaseTraversal(height, maxSteps) {
  const waysToTop = new Array(height + 1).fill(0);
  waysToTop[0] = 1;
  waysToTop[1] = 1;

  for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= currentHeight) {
      waysToTop[currentHeight] =
        waysToTop[currentHeight] + waysToTop[currentHeight - step];
      step++;
    }
  }

  return waysToTop[height];
}
// O(n*k) time | O(n) space
// n = height, k = maxSteps

// SOURCE SOLUTION 4
function staircaseTraversal(height, maxSteps) {
  let currentNumberOfWays = 0;
  const waysToTop = [1];

  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfPreviousWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;
    if (startOfPreviousWindow >= 0) {
      currentNumberOfWays -= waysToTop[startOfPreviousWindow];
    }
    currentNumberOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumberOfWays);
  }

  return waysToTop[height];
}
// O(n) time | O(n) space
// n = height, k = maxSteps
