function findMedian(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  if (arr.length % 2 === 0) {
    const firstMiddle = arr[Math.ceil(arr.length / 2)];
    const secondMiddle = arr[Math.ceil(arr.length / 2) + 1];

    return (firstMiddle + secondMiddle) / 2;
  } else {
    return arr[Math.ceil(arr.length / 2) - 1];
  }
}

const median = findMedian([0, 1, 2, 3, 4, 5, 6]);

console.log(median);
