/*
If you open the keypad of your mobile phone, most of the numbers will have letters associated with them. This allows certain phone numbers to spell out actual words. It's important to note that a phone number doesn't represent a single sequence of letters, but rather multiple combinations of letters. For instance, the digit 2 can represent a, b, and c.

A mnemonic is defined as a pattern of letters, ideas, or associations that assist in remembering something. Companies oftentimes use a mnemonic for their phone number to make it easier to remember.

Given a stringified phone number of any non-zero length, write a function that returns all mnemonics for this phone number, in any order.

For this problem, a valid mnemonic may only contain letters and the digits 0 and 1. In other words, if a digit is able to be represernted by a letter, then it must be. Digits 0 and 1 are the only two digits that don't have letter representations on the keypad.
*/

// MY SOLUTION (32 min)
function phoneNumberMnemonics(
  phoneNumber,
  mnemonic = [],
  index = 0,
  mnemonics = []
) {
  let keypad = {
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: '0',
  };

  if (mnemonic.length === phoneNumber.length) {
    mnemonics.push(mnemonic.join(''));
    return;
  }

  for (let i = index; i < phoneNumber.length; i++) {
    const letters = keypad[phoneNumber[i]];
    for (let j = 0; j < letters.length; j++) {
      mnemonic.push(letters[j]);
      phoneNumberMnemonics(phoneNumber, mnemonic, i + 1, mnemonics);
      mnemonic.pop();
    }
  }

  return mnemonics;
}
// O(n*4^n) time | O(n*4^n) space

// SOURCE SOLUTION
const DIGIT_LETTERS = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function phoneNumberMnemonics(phoneNumber) {
  const currentMnemonic = new Array(phoneNumber.length).fill('0');
  const mnemonicsFound = [];
  phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
  return mnemonicsFound;
}
// O(n*4^n) time | O(n*4^n) space

function phoneNumberMnemonicsHelper(
  idx,
  phoneNumber,
  currentMnemonic,
  mnemonicsFound
) {
  if (idx === phoneNumber.length) {
    const mnemonic = currentMnemonic.join('');
    mnemonicsFound.push(mnemonic);
  } else {
    const digit = phoneNumber[idx];
    const letters = DIGIT_LETTERS[digit];
    for (const letter of letters) {
      currentMnemonic[idx] = letter;
      phoneNumberMnemonicsHelper(
        idx + 1,
        phoneNumber,
        currentMnemonic,
        mnemonicsFound
      );
    }
  }
}
