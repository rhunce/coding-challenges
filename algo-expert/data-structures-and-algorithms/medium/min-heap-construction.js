/*
Implement a MinHeap class that supports:
 - Building a Min Heap from an input array of integers;
 - Inserting integers in the heap;
 - Removing the heap's minimum / root value;
 - Peeking at the heap's minimum / root value;
 - Sifting integers up and down the heap, which is to be used when inserting and removing values.

Note that the heap should be represented in the form of an array.
*/

// MY INITIAL ATTEMPT (45 min)
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastIndex = array.length - 1;
    const firstParentIndex = Math.floor((lastIndex - 1) / 2);
    for (let i = firstParentIndex; i >= 0; i--) {
      this.siftDown(i);
    }
    return array;
  }

  siftDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const leftChildValue = this.heap[leftChildIndex];
    const rightChildValue = this.heap[rightChildIndex];
    const bothChildrenExist =
      leftChildValue !== undefined && rightChildValue !== undefined;
    const neitherChildrenExist =
      leftChildValue === undefined && rightChildValue === undefined;
    if (bothChildrenExist) {
      if (
        leftChildValue <= rightChildValue &&
        leftChildValue < this.heap[index]
      ) {
        let valueToBeSiftedDown = this.heap[index];
        this.heap[index] = leftChildValue;
        this.heap[leftChildIndex] = valueToBeSiftedDown;
        this.siftDown(leftChildIndex);
      } else if (
        rightChildValue < leftChildValue &&
        rightChildValue < this.heap[index]
      ) {
        let valueToBeSiftedDown = this.heap[index];
        this.heap[index] = rightChildValue;
        this.heap[rightChildIndex] = valueToBeSiftedDown;
        this.siftDown(rightChildIndex);
        // return?
      }
    } else if (neitherChildrenExist) {
      return;
    } else if (leftChildValue !== undefined) {
      if (leftChildValue < this.heap[index]) {
        let valueToBeSiftedDown = this.heap[index];
        this.heap[index] = leftChildValue;
        this.heap[leftChildIndex] = valueToBeSiftedDown;
        return;
      }
    }
  }

  siftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = Math.floor((index - 1) / 2);
    let currentValue = this.heap[index];
    let parentValue = this.heap[parentIndex];
    if (currentValue < parentValue) {
      const valueToSiftUp = this.heap[index];
      this.heap[index] = parentValue;
      this.heap[parentIndex] = valueToSiftUp;
      this.siftUp(parentIndex);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.switchRootAndLastNodes();
    let removedNode = this.heap.pop();
    this.siftDown(0);
    return removedNode;
  }

  insert(value) {
    this.heap.unshift(value);
    this.siftDown(0);
  }

  switchRootAndLastNodes() {
    let rootValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = rootValue;
  }
}

// SOURCE SOLUTION
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor(array.length - 1 - 1 / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  // Time Complexity: O(n)
  // Space Complexity: O(1)

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  // Time Complexity: O(log n)
  // Space Complexity: O(1)

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  // Time Complexity: O(log n)
  // Space Complexity: O(1)

  peek() {
    return this.heap[0];
  }
  // Time Complexity: O(1)
  // Space Complexity: O(1)

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  // Time Complexity: O(log n)
  // Space Complexity: O(1)

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  // Time Complexity: O(log n)
  // Space Complexity: O(1)

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
