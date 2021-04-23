/*
You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three .s in the string.

An IP address is a sequence of four positive integers that are seperated by .s, where each individual integer is within the range 0 - 255, inclusive.

An IP address isn't valid if any of the individual integers contains leading 0s. For example, "192.168.0.1" is a valid IP address, but "192.168.00.1" and "192,168.0.01" aren't, because they contain "00" and "01," respectively. Another example of a valid IP address is "99.1.1.10;" conversely, "991.1.1.0" isn't valid, because 991 is greater than 255.

Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created from the string, your function should return an empty list.
*/

// BRUTE FORCE SOLUTION (30 min)
function validIPAddresses(string) {
  const validIpAddresses = [];
  const potentialIpAddresses = [];
  getAllPotentialIpAddresses(string, potentialIpAddresses);
  for (let i = 0; i < potentialIpAddresses.length; i++) {
    if (isValidIpAddress(potentialIpAddresses[i])) {
      validIpAddresses.push(potentialIpAddresses[i]);
    }
  }
  return validIpAddresses;
}
// O(n^3) time | O(?) space

function getAllPotentialIpAddresses(string, array) {
  const digits = string.split('');
  for (let i = 1; i < digits.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      for (let k = j + 1; k < string.length; k++) {
        let newDigits = digits.slice();
        newDigits.splice(k, 0, '.');
        newDigits.splice(j, 0, '.');
        newDigits.splice(i, 0, '.');
        array.push(newDigits.join(''));
      }
    }
  }
}

function isValidIpAddress(potentialValidIpAddress) {
  const stringIntegers = potentialValidIpAddress.split('.');
  for (let i = 0; i < stringIntegers.length; i++) {
    if (stringIntegers[i].length > 1 && stringIntegers[i][0] === '0') {
      return false;
    }
    const integer = parseInt(stringIntegers[i]);
    if (integer < 0 || integer > 255) {
      return false;
    }
  }
  return true;
}

// SOURCE SOLUTION
function validIPAddresses(string) {
  const ipAddressesFound = [];

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentIPAddressParts = ['', '', '', ''];

    currentIPAddressParts[0] = string.slice(0, i);
    if (!isValidPart(currentIPAddressParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentIPAddressParts[1] = string.slice(i, j);
      if (!isValidPart(currentIPAddressParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentIPAddressParts[2] = string.slice(j, k);
        currentIPAddressParts[3] = string.slice(k);

        if (
          isValidPart(currentIPAddressParts[2]) &&
          isValidPart(currentIPAddressParts[3])
        ) {
          ipAddressesFound.push(currentIPAddressParts.join('.'));
        }
      }
    }
  }

  return ipAddressesFound;
}
// O(1) time | O(1) space

function isValidPart(string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;

  return string.length === stringAsInt.toString().length;
}
