/*
 * 자릿수 더하기
 */

function solution(n) {
  var answer = 0;
  var input = String(n);

  for (var i = 0; i < input.length; i++) {
    answer = answer + Number(input[i]);
  }
  return answer;
}

console.log(solution(123));
