/*
 * 짝수와 홀수
 */

function solution(num) {
  var answer = num % 2;
  //   if (answer === 0) {
  //     return 'Even';
  //   }
  //   return 'Odd';
  return answer === 0 ? 'Even' : 'Odd';
}
