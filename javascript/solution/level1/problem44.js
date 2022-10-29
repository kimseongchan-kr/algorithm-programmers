function solution(a, b, n) {
  let answer = 0;
  let spend = n;

  while (spend >= a) {
    answer += Math.floor(spend / a) * b;
    spend = Math.floor(spend / a) * b + (spend % a);
  }

  return answer;
}

console.log(solution(2, 1, 20));
