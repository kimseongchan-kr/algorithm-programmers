/*
 * 나누어 떨어지는 숫자 배열
 */

function solution(arr, divisor) {
  var answer = [];
  var inputArray = arr.sort((a, b) => a - b);

  for (var i = 0; i < inputArray.length; i++) {
    var temp = arr[i] / divisor;

    if (Number.isInteger(temp)) {
      answer.push(arr[i]);
    }
  }

  if (answer.length === 0) {
    return [-1];
  }

  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
