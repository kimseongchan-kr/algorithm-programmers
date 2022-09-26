/*
 * 가운데 글자 가져오기
 */

function solution(s) {
  var answer = '';
  var stringCenterNumber = s.length / 2;

  if (Number.isInteger(stringCenterNumber)) {
    answer = answer + s[stringCenterNumber - 1];
    answer = answer + s[stringCenterNumber];
  } else {
    var temp = Math.floor(stringCenterNumber);
    answer = answer + s[temp];
  }

  return answer;
}

console.log(solution('abcde'));
