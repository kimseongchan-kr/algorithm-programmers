/*
 * 두 정수 사이의 합
 */

function solution(a, b) {
  var answer = 0;
  var smallNumber = a;
  var bigNumber = b;

  if (smallNumber === bigNumber) {
    return smallNumber;
  }

  if (smallNumber > bigNumber) {
    smallNumber = b;
    bigNumber = a;
  }

  for (let i = smallNumber; i <= bigNumber; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(3, 3));
