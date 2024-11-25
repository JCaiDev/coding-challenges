// Brute force method
function maxProfitBruteForce(prices) {
  if (!prices.length) return 0;

  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      maxProfit = Math.max(maxProfit, sell - buy);
    }
  }
  return maxProfit;
}

// Sliding Window Method

class Solution {
  maxProfit(prices) {
    let maxProfit = 0;
    let buy = 0;
    for (let sell = 1; r < prices.length; sell++) {
      if (prices[sell] > prices[buy]) {
        let profit = prices[sell] - prices[buy];
        maxProfit = Math.max(profit, maxProfit);
      } else {
        buy = sell;
      }
    }
    return maxProfit;
  }
}
