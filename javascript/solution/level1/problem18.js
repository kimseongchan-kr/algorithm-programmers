/*
 * 수박수박수박수박수박수?
 */

// function solution(n) {
//   var answer = '';

//   for (let i = 0; i < n; i++) {
//     answer += i & 1 ? '박' : '수';
//   }

//   return answer;
// }

function solution(n) {
  var answer = '';
  var count = Math.floor(n / 2);
  var addCount = n % 2;

  for (let i = 0; i < count; i++) {
    answer += '수박';
  }

  if (addCount > 0) {
    answer += '수';
  }

  return answer;
}

console.log(solution(3));
