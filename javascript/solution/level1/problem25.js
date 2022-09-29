/*
 * 문자열 다루기 기본
 */

function solution(s) {
  var string = s.trim();

  if (string.length === 4 || string.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

console.log(solution('1111'));
