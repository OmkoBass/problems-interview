function migratoryBirds(arr) {
  let birdObj = {};

  for (const element of arr) {
    if (!birdObj[element]) {
      birdObj[element] = 1;
    } else {
      birdObj[element] += 1;
    }
  }

  console.log(birdObj);

  let minKey = Object.keys(birdObj)[0];
  let maxValue = Object.values(birdObj)[0];
  for (const [key, value] of Object.entries(birdObj)) {
    if (value > maxValue) {
      maxValue = value;

      minKey = key;
    }
  }

  return minKey;
}

const lowestMostOccurringType = migratoryBirds([1, 4, 4, 4, 5, 3]);

console.log(lowestMostOccurringType);
