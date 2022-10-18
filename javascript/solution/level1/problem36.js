/*
 * 2016년
 */

// function solution(a, b) {
//   var answer = '';

//   var week = new Date(`2016-${a}-${b}`).getDay();

//   switch (week) {
//     case 0:
//       answer = 'SUN';
//       break;
//     case 1:
//       answer = 'MON';
//       break;
//     case 2:
//       answer = 'TUE';
//       break;
//     case 3:
//       answer = 'WED';
//       break;
//     case 4:
//       answer = 'THU';
//       break;
//     case 5:
//       answer = 'FRI';
//       break;
//     case 6:
//       answer = 'SAT';
//       break;
//     default:
//       answer = 'ERR';
//       break;
//   }

//   return answer;
// }

function solution(a, b) {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b;
  let answer;

  for (let i = 0; i < a - 1; i++) {
    day += month[i];
  }

  day = day % 7;

  switch (day) {
    case 0:
      answer = 'THU';
      break;
    case 1:
      answer = 'FRI';
      break;
    case 2:
      answer = 'SAT';
      break;
    case 3:
      answer = 'SUN';
      break;
    case 4:
      answer = 'MON';
      break;
    case 5:
      answer = 'TUE';
      break;
    case 6:
      answer = 'WED';
      break;
    default:
      answer = 'ERR';
      break;
  }

  return answer;
}

console.log(solution(5, 24));
