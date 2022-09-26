/*
 * 없는 숫자 더하기
 */

function solution(numbers) {
  var answer = 0;
  var numberArray = numbers.sort((a, b) => a - b);

  for (var i = 0; i < 10; i++) {
    if (numberArray.indexOf(i) === -1) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
