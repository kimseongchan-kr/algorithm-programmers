/*
 * 정수 제곱근 판별
 */

function solution(n) {
  var square = Math.sqrt(n);

  if (!Number.isInteger(square)) {
    return -1;
  }

  return (square + 1) ** 2;
}

console.log(solution(121));
