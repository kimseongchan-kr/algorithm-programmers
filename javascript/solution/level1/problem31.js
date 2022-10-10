/*
 * 같은 숫자는 싫어
 */

function solution(arr) {
  var answer = [];
  var temp = null;

  for (let i = 0; i < arr.length; i++) {
    if (temp !== arr[i]) {
      answer.push(arr[i]);
      temp = arr[i];
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
