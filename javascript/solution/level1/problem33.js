/*
 * 시저 암호
 */

// function solution(s, n) {
//   var answer = '';
//   var arr = s.split(' ');
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       var checkPoint = false;
//       var charCode = arr[i][j].charCodeAt(0);

//       if (97 > charCode) {
//         charCode = charCode + 32;
//         checkPoint = true;
//       }

//       charCode = charCode + n;

//       if (charCode > 122) {
//         charCode = 96 + (charCode - 122);
//       }

//       if (checkPoint) {
//         charCode = charCode - 32;
//       }

//       answer += String.fromCharCode(charCode);
//     }
//     if (i !== arr.length - 1) {
//       answer += ' ';
//     }
//   }

//   return answer;
// }

function solution(s, n) {
  var answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }

    var checkPoint = s[i].charCodeAt(0) < 91;
    var charCode = s[i].charCodeAt(0) + n;

    if (charCode > 90 && checkPoint) {
      charCode = 64 + charCode - 90;
    }

    if (charCode > 122) {
      charCode = 64 + charCode - 90;
    }

    answer += String.fromCharCode(charCode);
  }

  return answer;
}

console.log(solution('a B z', 25));
