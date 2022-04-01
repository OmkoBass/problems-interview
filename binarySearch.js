function binarySearch(array, searched) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === searched) {
      return searched;
    } else if (array[middle] > searched) {
      right = middle - 1;
    } else if (searched > array[middle]) {
      left = middle + 1;
    }
  }

  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = binarySearch(array, 10);

console.log(result);
