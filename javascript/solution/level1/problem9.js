/*
 * 문자열 내 p와 y의 개수
 */

function solution(s) {
  var inputString = s.toLowerCase();
  var findPLength = 0;
  var findYLength = 0;

  for (let i = 0; i < s.length; i++) {
    var tempChar = inputString[i];

    if (tempChar === 'p') {
      findPLength = findPLength + 1;
    }

    if (tempChar === 'y') {
      findYLength = findYLength + 1;
    }
  }

  return findPLength === findYLength;
}

console.log(solution('pPoooyY'));
