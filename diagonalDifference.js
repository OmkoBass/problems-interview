function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === j) {
        leftDiagonal += arr[i][j];
      }

      if (i + j === arr[0].length - 1) {
        rightDiagonal += arr[i][j];
      }
    }
  }

  return Math.abs(leftDiagonal - rightDiagonal);
}
