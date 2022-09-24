/*
 * 제일 작은 수 제거하기
 */

function solution(arr) {
  var temp = arr[0];
  var position = 0;

  if (arr.length === 1) {
    return [-1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (temp > arr[i]) {
      temp = arr[i];
      position = i;
    }
  }

  arr.splice(position, 1);

  return arr;
}

console.log(solution([10]));
