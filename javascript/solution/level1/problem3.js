/*
 * 평균 구하기
 */

function solution(arr) {
  var answer = 0;

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer / arr.length;
}

console.log(solution([5, 5]));