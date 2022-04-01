function maxProfit(days) {
  let buy = 0;
  let sell = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[buy] > days[i]) {
      buy = i;
    }
  }

  for (let i = buy; i < days.length; i++) {
    if (days[i] > sell) {
      sell = i;
    }
  }

  return days[sell] - days[buy];
}

const days = [7, 1, 5, 3, 6, 4];

const result = maxProfit(days);

console.log(result);
