/*

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
// O(n*3^n) time ??? | O(3^n) space ???
