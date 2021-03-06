/*
Given an array of distinct positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal.
*/

// MY SOLUTION (45 min)
class CountInfo {
  constructor(count) {
    this.count = count;
  }
}

function numberOfWaysToMakeChange(n, denoms) {
  let totalCount = new CountInfo(0);
  const getNumberOfWays = function(remainingChange, denoms, start) {
    if (remainingChange < 0) {
      return;
    }
    if (remainingChange === 0) {
      totalCount.count++;
      return;
    }
    for (let i = start; i < denoms.length; i++) {
      let change = remainingChange - denoms[i];
      getNumberOfWays(change, denoms, i);
    }
  }
  getNumberOfWays(n, denoms, 0);
  return totalCount.count;
}
// Time Complexity: O(?)
// Space Complexity: O(n)

// SOURCE SOLUTION
function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
}
// Time Complexity: O(nd)
// Space Complexity: O(n)
// n = target amount and d = number of coin denominations.