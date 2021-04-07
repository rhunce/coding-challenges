/*
You're given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.

For the purpose of this question, a cycle is defined as any number of vertices, including just one vertex, that are connected in a closed chain. A cycle can also be defined as a chain of at least one vertex in which the first vertex is the same as the last.

The given list is what's called an adjacency list, and it represents a graph. The number of vertices in the graph is equal to the length of edges, where each index i in edges contains vertex i's outbound edges, in no particular order. Each individual edge is represented by a positive integer that denotes an index (a destination vertex) in the list that this vertex is connected to. Note that these edges are directed, meaning that you can only travel from a particular vertex to its destination, not the other way around (unless the destination vertex itself has an outbound edge to the original vertex).

Also note that this graph may contain self-loops. A self-loop is an edge that has the same destination and origin; in other words, it's an edge that connects a vertex to itself. For the purpose of this question, a self-loop is considered a cycle.
*/

// MY SOLUTION ATTEMPT
function cycleInGraph(edges) {
  let foundACycle = false;
  for (let i = 0; i < edges.length; i++) {
    const initialVertice = i;
    for (let j = 0; j < edges[i].length; j++) {
      let nextVertex = edges[i][j];
      foundACycle = traverseAllEdgePaths(
        [initialVertice, nextVertex],
        edges,
        nextVertex
      );
      if (foundACycle) {
        return foundACycle;
      }
    }
  }
  return foundACycle;
}

function traverseAllEdgePaths(visitedVertices, edges, nextVertex) {
  let cycleFound = false;
  let nextVertexEdges = edges[nextVertex];
  for (let i = 0; i < nextVertexEdges.length; i++) {
    let followingVertex = nextVertexEdges[i];
    visitedVertices.push(nextVertex);
    if (visitedVertices.indexOf(followingVertex) > -1) {
      return true;
    } else {
      visitedVertices.push(followingVertex);
      cycleFound = traverseAllEdgePaths(
        visitedVertices,
        edges,
        followingVertex
      );
    }
  }
  return cycleFound;
}

// SOURCE SOLUTION
function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const visited = new Array(numberOfNodes).fill(false);
  const currentlyInStack = new Array(numberOfNodes).fill(false);

  for (let node = 0; node < numberOfNodes; node++) {
    if (visited[node]) continue;
    const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
    if (containsCycle) return true;
  }

  return false;
}
// Time Complexity: O(v + e)
// Space Complexity: O(v)
// v = total vertices, e = total edges

function isNodeInCycle(node, edges, visited, currentlyInStack) {
  visited[node] = true;
  currentlyInStack[node] = true;

  const neighbors = edges[node];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }

  currentlyInStack[node] = false;
  return false;
}
