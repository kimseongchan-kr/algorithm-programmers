/*
 * 이상한 문자 만들기
 */

function solution(s) {
  var answer = '';
  var arr = s.split(' ');
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      var temp = arr[i][j];
      if (j & 1) {
        answer += temp.toLowerCase();
      } else {
        answer += temp.toUpperCase();
      }
    }
    if (i !== arr.length - 1) {
      answer += ' ';
    }
  }

  return answer;
}

console.log(solution('try'));
