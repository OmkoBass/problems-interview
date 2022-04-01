function maximumSubArray(array) {
  let maxSum = array[0];
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += array[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const result = maximumSubArray(numbers);

console.log(result);
