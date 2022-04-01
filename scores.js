function breakingRecords(scores) {
  let highScores = 0;
  let lowScores = 0;

  let highScore = scores[0];
  let lowScore = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      highScores++;
    }

    if (scores[i] < lowScore) {
      lowScore = scores[i];
      lowScores++;
    }
  }

  console.log(`${highScores} ${lowScores}`);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
