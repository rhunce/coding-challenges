/*
Given an array of positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10], you have access to an unlimited amount of 1s, 5s, and 10s.

If it's impossible to make change for the target amount, return -1.
*/

// MY PARTIALLY CORRECT SOLUTION (50 min)
class CoinInfo {
  constructor(currentCoinCount, minCoinCount) {
    this.currentCoinCount = currentCoinCount;
    this.minCoinCount = minCoinCount;
  }
}

function minNumberOfCoinsForChange(n, denoms) {
  let coinInfo = new CoinInfo(0, -1);
  const coinCounter = function(targetAmount, denoms) {
    if (targetAmount < 0) {
      return;
    }
    if (targetAmount === 0) {
      if (coinInfo.minCoinCount === -1 || coinInfo.currentCoinCount < coinInfo.minCoinCount) {
        coinInfo.minCoinCount = coinInfo.currentCoinCount;
        coinInfo.currentCoinCount = 0;
        return;
      } else {
        coinInfo.currentCoinCount = 0;
        return;
      }
    }
    for (let i = 0; i < denoms.length; i++) {
      let newAmount = targetAmount - denoms[i];
      coinInfo.currentCoinCount++;
      coinCounter(newAmount, denoms);
    }
  }
  coinCounter(n, denoms, coinInfo);
  return coinInfo.minCoinCount;
}

// SOURCE SOLUTION
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
      }
    }
  }
  return numOfCoins[n] !== Number.POSITIVE_INFINITY ? numOfCoins[n] : -1;
}