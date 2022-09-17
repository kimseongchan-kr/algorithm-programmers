/*
 *나머지가 1이 되는 수 찾기
 */

function solution(n) {
  var answer = 0;

  for (let i = 0; i < n; i++) {
    var temp = n % i;

    if (temp === 1) {
      return i;
    }
  }

  return answer;
}

console.log(solution(10));
