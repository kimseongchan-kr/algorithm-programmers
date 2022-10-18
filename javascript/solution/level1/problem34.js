/*
 * 문자열 내 마음대로 정렬하기
 */

// function solution(strings, n) {
//   var answer = strings;

//   answer.sort((a, b) => {
//     const nameA = a.toUpperCase();
//     const nameB = b.toUpperCase();

//     if (nameA[n] === nameB[n]) {
//       if (nameA < nameB) {
//         return -1;
//       }

//       if (nameA > nameB) {
//         return 1;
//       }

//       return 0;
//     }

//     if (nameA[n] < nameB[n]) {
//       return -1;
//     }

//     if (nameA[n] > nameB[n]) {
//       return 1;
//     }

//     return 0;
//   });

//   return answer;
// }

// function solution(strings, n) {
//   var answer = strings;

//   answer.sort((a, b) => {
//     const nameA = a.toUpperCase();
//     const nameB = b.toUpperCase();
//     let beforeText = nameA[n];
//     let afterText = nameB[n];

//     if (beforeText === afterText) {
//       beforeText = nameA;
//       afterText = nameB;
//     }

//     if (beforeText < afterText) {
//       return -1;
//     }

//     if (beforeText > afterText) {
//       return 1;
//     }

//     return 0;
//   });

//   return answer;
// }

function solution(strings, n) {
  var answer = strings;

  answer.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();

    if (nameA[n] === nameB[n]) {
      return nameA.localeCompare(nameB);
    }

    if (nameA[n] < nameB[n]) {
      return -1;
    }

    if (nameA[n] > nameB[n]) {
      return 1;
    }

    return 0;
  });

  return answer;
}

console.log(solution(['sun', 'bed', 'car'], 1));
