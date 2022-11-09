function solution(food) {
  const foodList = [];

  for (let i = 1; i < food.length; i++) {
    for (let j = 1; j <= food[i] / 2; j++) {
      foodList.push(i);
    }
  }

  const answer = foodList.join('') + 0 + foodList.reverse().join('');

  return answer;
}

console.log(solution([1, 3, 4, 6]));
