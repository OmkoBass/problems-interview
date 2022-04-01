// Write a method or a function that merges two sorted arrays, A and B, into A.
// The array A is initialized with a sufficient number of elements
// so that all values from A and B can be accommodated.
// Values of 0 represent "empty" elements, placed at the end of the array A,
// that can be filled in. The array A should contain all
// the elements from A and B in sorted order.
// The sort order of the array A should not be changed.
// A = [-I, 15, 0, 0, 0, 0] (effectively A is [-1, 15])
// B = (4, 3, 2, 1]
// The result is A = (-1, 1, 2, 3, 4, 15]

function mergeTwoSortedArrays(A, B, n) {
  let i = n;
  let j = 0;
  let maxPointer = A.length - 1;

  while (j < B.length && i >= 0) {
    if (A[i] >= B[j]) {
      A[maxPointer] = A[i];

      maxPointer--;
      i--;
    } else if (B[j] >= A[i]) {
      A[maxPointer] = B[j];

      maxPointer--;
      j++;
    }
  }

  return A;
}

const A = [-1, 15, 0, 0, 0, 0];
const B = [4, 3, 2, 1];

const result = mergeTwoSortedArrays(A, B, 1);

console.log(result);
