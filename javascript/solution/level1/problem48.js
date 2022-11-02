function solution(participant, completion) {
  let answer = '';
  const _participant = participant.sort();
  const _completion = completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (_completion[i] !== _participant[i]) {
      answer = _participant[i];
      break;
    }
  }

  return answer === '' ? _participant[_participant.length - 1] : answer;
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
