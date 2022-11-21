function solution(n, lost, reserve) {
  let answer = 0;
  const _lost = [...lost].sort();
  const _reserve = [...reserve].sort();

  for (let i = 0; i < _lost.length; i++) {
    for (let j = 0; j < _reserve.length; j++) {
      if (_lost[i] === _reserve[j]) {
        _lost[i] = -1;
        _reserve.splice(j, 1);
        break;
      }
    }
  }

  for (let i = 0; i < _lost.length; i++) {
    if (_lost[i] === -1) {
      answer++;
    }

    for (let j = 0; j < _reserve.length; j++) {
      if (Math.abs(_lost[i] - _reserve[j]) === 1) {
        _reserve.splice(j, 1);
        answer++;
      }
    }
  }

  return n - _lost.length + answer;
}

console.log(solution(10, [10, 7, 5], [6]));
