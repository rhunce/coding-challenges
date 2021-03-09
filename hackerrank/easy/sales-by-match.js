/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Function Description

Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
int n: the number of socks in the pile
int ar[n]: the colors of each sock

Returns

int: the number of pairs
*/

function sockMerchant(n, ar) {
  let cache = {};
  let numberOfPairs = 0;
  for (let i = 0; i < ar.length; i++) {
    if (cache[ar[i]] !== undefined) {
      cache[ar[i]]++;
      if (cache[ar[i]] % 2 === 0) {
        numberOfPairs++;
      }
    } else {
      cache[ar[i]] = 1;
    }
  }
  return numberOfPairs;
}