function solution(numbers) {
  var answer = [];
  var tempArray = [];

  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (i == j) continue;
      var result = numbers[i] + numbers[j];
      tempArray.push(result);
    }
  }

  tempArray.sort((a, b) => a - b);

  var temp = -1;
  for (var z = 0; z < tempArray.length; z++) {
    if (temp === tempArray[z]) continue;

    temp = tempArray[z];
    answer.push(tempArray[z]);
  }

  return answer;
}

console.log(solution([0, 0, 0]));
