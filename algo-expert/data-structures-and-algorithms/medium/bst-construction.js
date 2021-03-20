/*
Write a BST class for a Binary Search Tree. The class should support:

  - Inserting values with the insert method;
  - Removing values with the remove method; this method should only remove the first instance of a given value.
  - Searching for values with the contains method.

Note that you can't remove values from a single-node tree. In other words, calling the remove method on a single-node tree should simply not do anything.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property:

  - its value is strictly greater than the values of every node to its left;
  - its value is less than or equal to the values of every node to its right; and
  - its children are either valid BST nodes themselves or null.
*/

// SOURCE SOLUTION 1 (might be an error in here somewhere; check against algoexpert tests)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space

  constains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }
  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space

  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // This is a single-node tree; do nothing.
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
    return this;
  }
  // AVERAGE: O(log(n)) time | O(log(n)) space
  // WORST: O(n) time | O(n) space

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

// SOURCE SOLUTION 2
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }
  // AVERAGE: O(log(n)) time | O(1) space
  // WORST: O(n) time | O(1) space

  contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // AVERAGE: O(log(n)) time | O(1) space
  // WORST: O(n) time | O(1) space

  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // scenarios where the input value matches the value of the current node
        // if current node has two children
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        // if this is the root node
        } else if (parentNode === null) {
          // and it has only one child to the left
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          // and it has only one child to the left
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // This is a single-node tree; do nothing.
          }
        }
        // if current node not root node
        // and current node smaller than parent node
        else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        // if current node not root node
        // and current node greater than parent node
        else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }
  // AVERAGE: O(log(n)) time | O(1) space
  // WORST: O(n) time | O(1) space

  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}


