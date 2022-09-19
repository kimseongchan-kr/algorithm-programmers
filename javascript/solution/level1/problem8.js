/*
 * 하샤드 수
 */

function solution(x) {
  var answer = true;
  var temp = String(x).split('').map(Number);
  var hashad = 0;

  for (let i = 0; i < temp.length; i++) {
    hashad = hashad + temp[i];
  }

  return x % hashad === 0 ? true : false;
}

console.log(solution(18));
