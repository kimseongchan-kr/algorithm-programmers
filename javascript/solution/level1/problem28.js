// function solution(price, money, count) {
//   var answer = money;

//   for (let i = 1; i <= count; i++) {
//     answer -= price * i;
//   }

//   if (answer <= 0) {
//     return Math.abs(answer);
//   }

//   return 0;
// }

function solution(price, money, count) {
  var total = (count * (price + price * count)) / 2;
  var answer = money - total;

  return answer < 0 ? Math.abs(answer) : 0;
}

console.log(solution(100, 105, 100));
