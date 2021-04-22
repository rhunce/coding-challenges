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

// MY IMPROVED SOLUTION
function sunsetViews(buildings, direction) {
  if (buildings.length === 0) {
    return [];
  }
  const buildingsWithSunsetView = [];
  determineBuildingsWithSunset(buildings, direction, buildingsWithSunsetView);
  if (direction === 'WEST') {
    return buildingsWithSunsetView;
  } else {
    return buildingsWithSunsetView.reverse();
  }
}

function determineBuildingsWithSunset(
  buildings,
  direction,
  buildingsWithSunsetView
) {
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
}
// O(n) time | O(n) space

// SOURCE SOLUTION 1
function sunsetViews(buildings, direction) {
  const buildingsWithSunsetViews = [];

  const startIdx = direction === 'WEST' ? 0 : buildings.length - 1;
  const step = direction === 'WEST' ? 1 : -1;

  let idx = startIdx;
  let runningMaxHeight = 0;
  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];
    if (buildingHeight > runningMaxHeight) buildingsWithSunsetViews.push(idx);
    runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);
    idx = idx + step;
  }

  if (direction === 'EAST') buildingsWithSunsetViews.reverse();

  return buildingsWithSunsetViews;
}
// O(n) time | O(n) space

// SOURCE SOLUTION 2
function sunsetViews(buildings, direction) {
  const candidateBuildings = [];

  const startIdx = direction === 'EAST' ? 0 : buildings.length - 1;
  const step = direction === 'EAST' ? 1 : -1;

  let idx = startIdx;
  while (idx >= 0 && idx < buildings.length) {
    const buildingHeight = buildings[idx];

    while (
      candidateBuildings.length > 0 &&
      buildings[candidateBuildings[candidateBuildings.length - 1]] <=
        buildingHeight
    ) {
      candidateBuildings.pop();
    }

    candidateBuildings.push(idx);

    idx = idx + step;
  }

  if (direction === 'WEST') candidateBuildings.reverse();

  return candidateBuildings;
}
// O(n) time | O(n) space
