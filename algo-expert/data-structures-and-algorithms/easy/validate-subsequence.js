/*
# MY PYTHON SOLUTION
def isValidSubsequence(array, sequence):
  if len(sequence) == 0 or len(sequence) > len(array):
    return False
    positionOfLastSequenceElementInArray = -1
  for sequenceElement in sequence:
    try:
      positionOfCurrentSequenceElementInArray = array.index(sequenceElement, positionOfLastSequenceElementInArray + 1)
      positionOfLastSequenceElementInArray = positionOfCurrentSequenceElementInArray
    except ValueError:
      return False
  return True
# O(n) time | O(1) space

# SOURCE PYTHON SOLUTION 1
def isValidSubsequence(array, sequence):
  arrIdx = 0
  seqIdx = 0
  while arrIdx < len(array) and seqIdx < len(sequence):
    if array[arrIdx] == sequence[seqIdx]:
      seqIdx += 1
    arrIdx += 1
  return seqIdx == len(sequence)
# O(n) time | O(1) space

# SOURCE PYTHON SOLUTION 2
def isValidSubsequence(array, sequence):
  seqIdx = 0
  for value in array:
    if seqIdx == len(sequence):
      break
    if sequence[seqIdx] == value:
      seqIdx += 1
  return seqIdx == len(sequence)
# O(n) time | O(1) space
*/

// MY SOLUTION
function isValidSubsequence(array, sequence) {
  let indexOfLastSequenceElementInArray = -1;
  for (const integer of sequence) {
    const indexOfCurrentSequenceElementInArray = array.indexOf(
      integer,
      indexOfLastSequenceElementInArray + 1
    );
    if (indexOfCurrentSequenceElementInArray === -1) {
      return false;
    }
    indexOfLastSequenceElementInArray = indexOfCurrentSequenceElementInArray;
  }
  return true;
}
// O(n) time | O(1) space

// SOURCE SOLUTION 1
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
}
// O(n) time | O(1) space

// SOURCE SOLUTION 2
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) {
      break;
    }
    if (sequence[seqIdx] === value) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
}
// O(n) time | O(1) space
