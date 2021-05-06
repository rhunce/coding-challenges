/*
Imagine that you're a teacher who's just graded the final exam in class. You have a list of student scores on the final exam in a particular order (not necessarily sorted), and you want to reward your students. You decide to do so fairly by giving them arbitrary rewards following two rules:

(1) All students must receive at least one reward.
(2) Any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or to the right) with a lower score and must receive strictly fewer rewards than an adjacent student with a higher score.

Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.

You can assume that all students have different scores; in other words, the scores are all unique.
*/

// MY SOLUTION ATTEMPT (1 hour; 4/9 test cases passed)
function minRewards(scores, rewards = [], startIndex = 0, endIndex = null) {
  endIndex = endIndex === null ? scores.length - 1 : endIndex;
  let lowestScore = Number.POSITIVE_INFINITY;
  for (let i = startIndex; i <= endIndex; i++) {
    if (scores[i] < lowestScore) {
      lowestScore = scores[i];
    }
  }
  const indexOfLowestScore = scores.indexOf(lowestScore);
  rewards[indexOfLowestScore] = 1;

  let leftIndex = indexOfLowestScore - 1;
  while (leftIndex >= startIndex) {
    if (
      scores[leftIndex] > scores[leftIndex + 1] &&
      (scores[leftIndex] < scores[leftIndex - 1] ||
        scores[leftIndex - 1] === undefined)
    ) {
      rewards[leftIndex] = rewards[leftIndex + 1] + 1;
    } else if (
      scores[leftIndex] > scores[leftIndex + 1] &&
      scores[leftIndex] > scores[leftIndex - 1]
    ) {
      minRewards(scores, rewards, startIndex, leftIndex + 1);
    } else if (
      scores[leftIndex] < scores[leftIndex + 1] &&
      (scores[leftIndex] < scores[leftIndex - 1] ||
        scores[leftIndex - 1] === undefined)
    ) {
      rewards[leftIndex] = 1;
    } else {
      rewards[leftIndex] = 1;
    }
    leftIndex--;
  }

  let rightIndex = indexOfLowestScore + 1;
  while (rightIndex <= endIndex) {
    if (
      scores[rightIndex] > scores[rightIndex - 1] &&
      (scores[rightIndex] < scores[rightIndex + 1] ||
        scores[rightIndex + 1] === undefined)
    ) {
      rewards[rightIndex] = rewards[rightIndex - 1] + 1;
    } else if (
      scores[rightIndex] > scores[rightIndex - 1] &&
      scores[rightIndex] > scores[rightIndex + 1]
    ) {
      minRewards(scores, rewards, rightIndex - 1, endIndex);
    } else if (
      scores[rightIndex] < scores[rightIndex + 1] &&
      (scores[rightIndex] < scores[rightIndex - 1] ||
        scores[rightIndex + 1] === undefined)
    ) {
      rewards[rightIndex] = 1;
    } else {
      rewards[rightIndex] = 1;
    }
    rightIndex++;
  }

  return rewards.reduce((acc, val) => acc + val);
}

// OPTIMAL SOURCE SOLUTION (source solution 3 of 3)
function minRewards(scores) {
  const rewards = scores.map((score) => 1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1;
  }
  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1])
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
  }
  return rewards.reduce((a, b) => a + b);
}
// O(n) time | O(n) space
