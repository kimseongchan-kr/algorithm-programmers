function solution(n) {
  var answer = 0;
  var numbers = [];
  var inputNumber = n;

  while (inputNumber / 3 > 0) {
    numbers.push(inputNumber % 3);
    inputNumber = Math.floor(inputNumber / 3);
  }

  numbers.reverse();

  for (let i = 0; i < numbers.length; i++) {
    answer += 3 ** i * numbers[i];
  }

  return answer;
}

console.log(solution(125));
