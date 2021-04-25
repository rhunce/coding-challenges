/*
Write a SuffixTrie class for a Suffix-Trie-like data structure. The class should have a root property set to the the root node of the trie and should support:

 - Creating the trie from a string; this will be done by calling the populateSuffixTrieFrom method upon class instantiation, which should populate the root of the class.

 - Search for strings in the trie.

Note that every string added to the trie should end with the special endSymbol character: '*'.
*/

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  // MY SOLUTION ATTEMPT (INCORRECT)
  // MY INCORRECT SOLUTION ATTEMPT
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let currentNode = this.root;
      for (let j = i; j < string.length; j++) {
        for (const letter in currentNode) {
          if (letter === string[j]) {
            if (j === string.length - 1) {
              currentNode[string[j]] = { '*': true };
              break;
            } else {
              currentNode = currentNode[string[j]];
            }
          } else {
            currentNode[string[j]] = {};
            currentNode = currentNode[string[j]];
            if (j === string.length - 1) {
              currentNode = { '*': true };
              break;
            }
          }
        }
      }
    }
  }

  contains(string) {
    let currentNode = this;
    for (let i = 0; i < string.length; i++) {
      for (const letter in currentNode) {
        if (letter === string[i]) {
          currentNode = currentNode[string[i]];
          break;
        }
        if (currentNode['*'] === true && j === string.length - 1) {
          return true;
        }
      }
    }
    return false;
  }
}
