function solution(d, budget) {
  var answer = 0;
  var orderPrices = d.sort((a, b) => {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });

  var allPrice = 0;

  for (let i = 0; i < orderPrices.length; i++) {
    allPrice += orderPrices[i];
    console.log(orderPrices[i], allPrice);

    if (allPrice > budget) break;
    answer++;
  }

  return answer;
}

console.log(solution([2, 4, 8, 10], 15));
