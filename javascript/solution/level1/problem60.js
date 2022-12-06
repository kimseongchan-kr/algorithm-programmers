function solution(numbers, hand) {
  var answer = '';
  const leftKey = { '*': true, 7: true, 4: true, 1: true };
  const middleKey = { 0: true, 8: true, 5: true, 2: true };
  const rightKey = { '#': true, 9: true, 6: true, 3: true };

  let leftPosition = [0, 0];
  let rightPosition = [2, 0];

  const position = [
    ['*', 7, 4, 1],
    [0, 8, 5, 2],
    ['#', 9, 6, 3],
  ];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (leftKey[number]) {
      const yPosition = position[0].indexOf(number);
      leftPosition = [0, yPosition];
      answer = answer + 'L';
      continue;
    }

    if (rightKey[number]) {
      const yPosition = position[2].indexOf(number);
      rightPosition = [2, yPosition];
      answer = answer + 'R';
      continue;
    }

    if (middleKey[number]) {
      const yPosition = position[1].indexOf(number);
      const middlePosition = [1, yPosition];

      let leftMoveCount = 0;
      let rightMoveCount = 0;

      for (let i = 0; i < middlePosition.length; i++) {
        leftMoveCount += Math.abs(leftPosition[i] - middlePosition[i]);
        rightMoveCount += Math.abs(rightPosition[i] - middlePosition[i]);
      }

      if (leftMoveCount === rightMoveCount) {
        if (hand === 'right') {
          rightPosition = middlePosition;
          answer = answer + 'R';
          continue;
        }

        if (hand === 'left') {
          leftPosition = middlePosition;
          answer = answer + 'L';
          continue;
        }
      }

      if (leftMoveCount < rightMoveCount) {
        leftPosition = middlePosition;
        answer = answer + 'L';
        continue;
      }

      if (leftMoveCount > rightMoveCount) {
        rightPosition = middlePosition;
        answer = answer + 'R';
        continue;
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
