/*
Given an array or buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.

A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.

The input array named buildings contains positive, non-zero integers representing the heights of the buildings. A building at index i thus has a height denoted by buildings[i]. All of the buildings face the same direction, and this direction is either east or west, denoted by the input string names direction, which will always be equal to either 'EAST' or 'WEST'. In relation to the input array, you can interpret these directions as right for east and left for west.

Important note: the indices in the input array should be sorted in ascending order.
*/

function sunsetViews(buildings, direction) {
  if (buildings.length === 0) {
    return [];
  }
  const buildingsWithSunsetView = [];
  if (direction === 'EAST') {
    let tallestHeight = buildings[buildings.length - 1];
    buildingsWithSunsetView.push(buildings.length - 1);
    for (let i = buildings.length - 2; i >= 0; i--) {
      if (buildings[i] > tallestHeight) {
        buildingsWithSunsetView.push(i);
        tallestHeight = buildings[i];
      }
    }
  } else {
    let tallestHeight = buildings[0];
    buildingsWithSunsetView.push(0);
    for (let i = 1; i < buildings.length; i++) {
      if (buildings[i] > tallestHeight) {
        buildingsWithSunsetView.push(i);
        tallestHeight = buildings[i];
      }
    }
  }

  return buildingsWithSunsetView.sort((a, b) => a - b);
}
// O(n log n) time | O(n) space
