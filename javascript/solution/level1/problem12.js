/*
 * 정수 내림차순으로 배치하기
 */

function solution(n) {
  var answer = String(n).split('').sort().reverse().join('');

  return Number(answer);
}

console.log(solution(118372));
