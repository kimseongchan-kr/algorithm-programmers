/*
 * 핸드폰 번호 가리기
 */

function solution(phone_number) {
  var answer = '';
  var frontNumber = phone_number.slice(0, -4);
  var backNumber = phone_number.slice(-4, phone_number.length);

  for (let i = 0; i < frontNumber.length; i++) {
    answer = answer + '*';
  }

  return answer + backNumber;
}

console.log(solution('01033334444'));
