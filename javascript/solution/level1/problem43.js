function solution(X, Y) {
  let answer = '';
  let x = makeCount(X);
  let y = makeCount(Y);

  for (const [key, value] of Object.entries(x)) {
    if (y[key]) {
      let count = value > y[key] ? y[key] : value;

      answer += key.repeat(count);
    }
  }

  if (answer.length === 0) {
    return '-1';
  }

  if (+answer === 0) {
    return '0';
  }

  return answer.split('').sort().reverse().join('');
}

const makeCount = (array) => {
  const temp = {};

  for (let i = 0; i < array.length; i++) {
    temp[array[i]] = (temp[array[i]] || 0) + 1;
  }

  return temp;
};

console.log(solution('00000000000000001000000000', '0000000000000001110000000000000000'));
