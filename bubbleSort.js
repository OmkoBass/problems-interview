const array = [5, 8, 13, 17, 27, 21, 2, 3, 9, 8, 7, 6, 5, 4, 1, 2, 10, 152];

const bubbleSort = (array) => {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const sorted = bubbleSort(array);

console.log(sorted);
