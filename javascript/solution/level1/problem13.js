/*
 * 두 정수 사이의 합
 */

// function solution(a, b) {
//   var answer = 0;
//   var smallNumber = a;
//   var bigNumber = b;

//   if (smallNumber === bigNumber) {
//     return smallNumber;
//   }

//   if (smallNumber > bigNumber) {
//     smallNumber = b;
//     bigNumber = a;
//   }

//   for (let i = smallNumber; i <= bigNumber; i++) {
//     answer = answer + i;
//   }

//   return answer;
// }

// function solution(a, b) {
//   var smallNumber = a;
//   var bigNumber = b;

//   if (smallNumber === bigNumber) {
//     return smallNumber;
//   }

//   if (smallNumber > bigNumber) {
//     smallNumber = b;
//     bigNumber = a;
//   }

//   var inputLength = bigNumber - smallNumber + 1;
//   var smallNumberPlusBigNumber = smallNumber + bigNumber;
//   var middleNumber = smallNumberPlusBigNumber % 2 === 0 ? smallNumberPlusBigNumber / 2 : 0;

//   console.log(inputLength, smallNumberPlusBigNumber, middleNumber);

//   return smallNumberPlusBigNumber * Math.floor(inputLength / 2) + middleNumber;
// }

// function solution(a, b) {
//   var smallNumber = a;
//   var bigNumber = b;

//   if (smallNumber === bigNumber) {
//     return smallNumber;
//   }

//   if (smallNumber > bigNumber) {
//     smallNumber = b;
//     bigNumber = a;
//   }

//   var halfAllNumber = Math.floor((bigNumber - smallNumber + 1) / 2);
//   var smallNumberPlusBigNumber = smallNumber + bigNumber;
//   var middleNumber = smallNumberPlusBigNumber % 2 === 0 ? smallNumberPlusBigNumber / 2 : 0;

//   return smallNumberPlusBigNumber * halfAllNumber + middleNumber;
// }

function solution(a, b) {
  var smallNumber = a;
  var bigNumber = b;

  if (smallNumber === bigNumber) {
    return smallNumber;
  }

  if (smallNumber > bigNumber) {
    smallNumber = b;
    bigNumber = a;
  }

  var halfAllNumber = Math.floor((bigNumber - smallNumber + 1) / 2);
  var smallNumberPlusBigNumber = smallNumber + bigNumber;
  var middleNumber = smallNumberPlusBigNumber % 2 === 0 ? smallNumberPlusBigNumber / 2 : 0;

  return smallNumberPlusBigNumber * halfAllNumber + middleNumber;
}

console.log(solution(5, 3));
