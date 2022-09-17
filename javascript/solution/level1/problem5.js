/*
 * 자연수 뒤집어 배열로 만들기
 */

// function solution(n) {
//   const temp = String(n);
//   const awnser = [];
//   for (let i = temp.length - 1; i >= 0; i--) {
//     awnser.push(Number(temp[i]));
//   }

//   return awnser;
// }

function solution(n) {
  const input = String(n).split('').reverse();
  const awnser = input.map(Number);

  return awnser;
}

console.log(solution(12345));
