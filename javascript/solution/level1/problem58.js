function solution(n, arr1, arr2) {
  const firstMap = arr1.map((value) => getBinaryNumber(n, value));
  const secondMap = arr2.map((value) => getBinaryNumber(n, value));

  const answer = [];

  for (let i = 0; i < n; i++) {
    let overlapMap = '';

    for (let j = 0; j < n; j++) {
      if (firstMap[i][j] === '1' || secondMap[i][j] === '1') {
        overlapMap = overlapMap + '#';
        continue;
      }

      overlapMap = overlapMap + ' ';
    }
    answer.push(overlapMap);
  }

  return answer;
}

function getBinaryNumber(length, number) {
  let BinaryNumber = '';
  let octalNumber = number;

  while (octalNumber > 0) {
    BinaryNumber = `${octalNumber % 2}` + BinaryNumber;
    octalNumber = Math.floor(octalNumber / 2);
  }

  return BinaryNumber.padStart(length, 0);
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
getBinaryNumber(9);
