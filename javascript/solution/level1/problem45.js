function solution(number) {
  let answer = 0;
  let result;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let z = j + 1; z < number.length; z++) {
        if (z === i || z === j) {
          continue;
        }

        result = number[i] + number[j] + number[z];

        if (result === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

console.log(solution([-1, 1, -1, 1]));
