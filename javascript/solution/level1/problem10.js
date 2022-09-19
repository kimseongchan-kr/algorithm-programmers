/*
 * 콜라츠 추측
 */

function solution(num) {
  var answer = num;
  var loopCounting = 0;

  while (answer > 1) {
    var checkOddEven = answer & 1 ? 'Odd' : 'Even';

    if (checkOddEven === 'Odd') {
      answer = answer * 3 + 1;
    }

    if (checkOddEven === 'Even') {
      answer = answer / 2;
    }

    loopCounting = loopCounting + 1;

    if (loopCounting === 500) {
      return -1;
    }
  }

  return loopCounting;
}

console.log(solution(626331));
