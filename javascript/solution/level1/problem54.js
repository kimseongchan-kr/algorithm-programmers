function solution(lottos, win_nums) {
  let answer = 0;

  const _lottos = lottos.filter((num) => num >= 1);
  const _win_nums = [...win_nums];
  const blankNumber = lottos.length - _lottos.length;

  for (let i = 0; i < _lottos.length; i++) {
    for (let j = 0; j < _win_nums.length; j++) {
      if (_lottos[i] === _win_nums[j]) {
        answer++;
      }
    }
  }

  const topRank = getRank(answer + blankNumber);
  const lowRank = getRank(answer);

  return [topRank, lowRank];
}

function getRank(num) {
  switch (num) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
