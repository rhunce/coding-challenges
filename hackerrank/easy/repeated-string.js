/*
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Function Description
Complete the repeatedString function in the editor below.
repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider

Returns
int: the frequency of a in the substring
*/

function repeatedString(s, n) {
  let numberOfAsPerString = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      numberOfAsPerString++;
    }
  }
  let stringLength = s.length;
  let multiplier = Math.floor(n / stringLength);
  let remainder = n % stringLength;
  let remainderAs = 0;
  for (let i = 0; i < remainder; i++) {
    if (s[i] === 'a') {
      remainderAs++;
    }
  }
  return ((numberOfAsPerString * multiplier) + (remainderAs));
}