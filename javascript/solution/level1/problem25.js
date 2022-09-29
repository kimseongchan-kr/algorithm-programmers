function solution(s) {
  var answer = true;
  console.log(s.split(''));
  var test = s.split('');

  for (var i = 0; i < test.length; i++) {
    console.log(s[i]);

    if (isNaN(s[i])) {
      return false;
    }
  }

  return answer;
}

console.log(solution('9019zZ213'));
