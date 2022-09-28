/*
 * 문자열 내림차순으로 배치하기
 */

function solution(s) {
  var answer = s.split('').sort().reverse().join('');

  return answer;
}

console.log(solution('Zbcdefg'));
