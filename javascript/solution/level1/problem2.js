/*
 * 약수의 합
 */

function solution(n) {
  var answer = 0;
  var temp = 1;

  for (let i = 0; i < n; i++) {
    var result = n % temp;

    if (result === 0) {
      answer = answer + temp;
    }

    temp = temp + 1;
  }

  return answer;
}

console.log(solution(12));
