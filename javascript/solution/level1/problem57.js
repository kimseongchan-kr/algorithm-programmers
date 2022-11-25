function solution(N, stages) {
  let allUser = stages.length;

  let failUser = 0;
  let failCount = Array(N + 1).fill(0);
  let failPersent = Array.from({ length: N + 1 }, (_, index) => [index, 0]);

  for (let i = 0; i < stages.length; i++) {
    failCount[stages[i] - 1] += 1;
  }

  for (let i = 0; i < failCount.length; i++) {
    let reachUser = allUser - failUser;
    failPersent[i][1] = failCount[i] / reachUser;
    failUser += failCount[i];
  }

  failPersent.pop();
  failPersent.sort((a, b) => b[1] - a[1]);
  const answer = failPersent.map((value) => value[0] + 1);

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
