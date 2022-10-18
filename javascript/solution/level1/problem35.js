/*
 * 소수 찾기
 */

// function solution(n) {
//   var answer = [];
//   var numberArray = Array.from({ length: n }, (_, i) => i + 1);

//   while (numberArray.length > 1) {
//     var pointer = numberArray[1];

//     answer.push(numberArray.splice(1, 1));

//     var temp = 0;
//     var drain = 2;

//     while (temp < numberArray[numberArray.length - 1]) {
//       temp = pointer * drain;

//       if (numberArray.indexOf(temp) > 0) {
//         numberArray.splice(numberArray.indexOf(temp), 1);
//       }

//       drain++;
//     }
//   }

//   return answer.length + numberArray.length - 1;
// }

// function solution(n) {
//   let numberArray = [];
//   let answer = [];

//   for (let i = 2; i <= n; i++) {
//     if (numberArray.indexOf(i) < 0) {
//       answer.push(i);

//       for (let j = 2; j <= n; j++) {
//         if (i * j > n) break;
//         numberArray.push(i * j);
//       }
//     }
//   }

//   return answer.length;
// }

function solution(n) {
  const answer = Array.from({ length: n }, () => true);
  answer[0] = false;

  for (let i = 2; i <= n; i++) {
    if (!answer[i - 1]) continue;
    for (let j = 2; j < answer.length; j++) {
      if (i * j > n) break;
      answer[i * j - 1] = false;
    }
  }

  const result = answer.filter((value) => value);
  return result.length;
}

console.log(solution(10));
