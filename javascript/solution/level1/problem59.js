function solution(dartResult) {
  let answer = 0;
  let tempScore = '';

  const scores = [];
  const option = { '*': 2, '#': -1 };
  const bonus = { S: 1, D: 2, T: 3 };

  for (let i = 0; i < dartResult.length; i++) {
    const turn = scores.length - 1;

    if (!isNaN(dartResult[i])) {
      tempScore = tempScore + dartResult[i];
      continue;
    }

    if (dartResult[i] === '*' || dartResult[i] === '#') {
      if (turn > 0 && dartResult[i] === '*') {
        scores[turn - 1] = scores[turn - 1] * option[dartResult[i]];
      }
      scores[turn] = scores[turn] * option[dartResult[i]];
      continue;
    }

    scores.push(Number(tempScore) ** bonus[dartResult[i]]);
    tempScore = 0;
  }

  scores.forEach((value) => {
    answer = answer + value;
  });

  return answer;
}

console.log(solution('1T2D3D#'));
