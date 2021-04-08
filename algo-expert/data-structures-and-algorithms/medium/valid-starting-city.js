/*
Imagine you have a set of cities that are laid out in a circle, connected by a circular road that runs clockwise. Each city has a gas station that provides gallons of fuel, and each city is some distance away from the next city.

You have a car that can drive some number of miles per gallon of fuel, and your goal is to pick a starting city such that you can fill up your car with that city's fuel, drive to the next city, refill up your car with that city's fuel, drive to the next city, and so on until you return back to the starting city with 0 or more gallons of fuel left.

This city is called a valid starting city, and it's guaranteed that there will always be exactly one valid starting city.

For the actual problem, you'll be given an array of distances such that city i is distances[i] away from city i + 1. Since the cities are connected via a circular road, the last city is connected to the first city. In other words, the last distance in the distances array is equal to the distance from the last city to the first city. You'll also be given an array of fuel available at each city, where fuel[i] is equal to the fuel available at city i. The total amount of fuel available (from all cities combined) is exactly enough to travel to all cities. Your fuel tank always starts out empty, and you're given a positive integer value for the number of miles that your car can travel per gallon of fuel (miles per gallon, or MPG). You can assume that you will always be given at least two cities.

Write a function that returns the index of the valid starting city.
*/

// MY SOLUTION
function validStartingCity(distances, fuel, mpg) {
  distances = [...distances, ...distances];
  fuel = [...fuel, ...fuel];

  for (let i = 0; i < distances.length / 2; i++) {
    let distanceToNextCity = distances[i];
    let gasMilageLeft = mpg * fuel[i];
    let tripsLeft = distances.length / 2;
    let foundValidCity = false;
    while (tripsLeft > 0) {
      if (gasMilageLeft < distanceToNextCity) {
        break;
      }
      gasMilageLeft -= distanceToNextCity;
      const nextDistanceAndFuelIndex = i + distances.length / 2 - tripsLeft + 1;
      gasMilageLeft += fuel[nextDistanceAndFuelIndex] * mpg;
      distanceToNextCity = distances[nextDistanceAndFuelIndex];
      tripsLeft--;
      if (tripsLeft === 0) {
        foundValidCity = true;
      }
    }
    if (foundValidCity) {
      return i;
    }
  }
}
// Time Complexity: O(n^2);
// Space Complexity: O(n);

// OPTIMAL SOURCE SOLUTION
function validStartingCity(distances, fuel, mpg) {
  const numberOfCities = distances.length;
  let milesRemaining = 0;

  let indexOfStartingCityCandidate = 0;
  let milesRemainingAtStartingCityCandidate = 0;

  for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
    const distanceFromPreviousCity = distances[cityIdx - 1];
    const fuelFromPreviousCity = fuel[cityIdx - 1];
    milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity;

    if (milesRemaining < milesRemainingAtStartingCityCandidate) {
      milesRemainingAtStartingCityCandidate = milesRemaining;
      indexOfStartingCityCandidate = cityIdx;
    }
  }

  return indexOfStartingCityCandidate;
}
// Time Complexity: O(n);
// Space Complexity: O(1);
