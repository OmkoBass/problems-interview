function merge(list1, list2) {
  let temp = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] >= list2[j]) {
      temp.push(list2[j]);

      j++;
    } else {
      temp.push(list1[i]);

      i++;
    }
  }

  return temp;
}

const A = [1, 2, 4];
const B = [1, 3, 4];

const result = merge(A, B);

console.log(result);
