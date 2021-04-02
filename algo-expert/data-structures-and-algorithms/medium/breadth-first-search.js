/*
You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.

Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-First Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // MY SOLUTION (23 min)
  breadthFirstSearch(array = [], root = this, queue = []) {
    array.push(root.name);
    if (root.children.length > 0) {
      for (let child of root.children) {
        queue.push(child);
      }
    }
    if (queue.length > 0) {
      let nextNode = queue.shift();
      nextNode.breadthFirstSearch(array, nextNode, queue);
    }
    return array;
  }
  // Time Complexity: O(n)
  // Space Complexity: O(n)

  // SOURCE SOLUTION
  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
  // Time Complexity: O(v + e)
  // Space Complexity: O(v)
}