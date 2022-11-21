function solution(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const human = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (pattern[i][j % pattern[i].length] === answers[j]) {
        human[i + 1]++;
      }
    }
  }

  let answer = [];
  let tempTop = 1;

  for (let i = 1; i <= pattern.length; i++) {
    if (human[tempTop] === human[i]) {
      answer.push(i);
      continue;
    }

    if (human[tempTop] < human[i]) {
      answer = [i];
      tempTop = i;
      continue;
    }
  }

  return answer;
}

console.log(solution([2, 1, 2, 3, 2, 2, 4, 4, 5, 5]));
