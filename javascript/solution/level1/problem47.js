function solution(s) {
  let temp = '';
  let answer = '';
  const strings = [];
  const numbers = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      strings.push(s[i]);
      continue;
    }

    temp += s[i];
    if (numbers[temp] !== undefined) {
      strings.push(temp);
      temp = '';
    }
  }

  for (const value of strings) {
    if (isNaN(value)) {
      answer += numbers[value];
      continue;
    }

    answer += value;
  }

  return +answer;
}

// function solution(s) {
//   let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     console.log('arr', arr);
//     answer = arr.join(i);
//     console.log('answer', answer);
//   }

//   return Number(answer);
//}

// function solution(s) {
//   let answer = s;
//   let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//   for (let i = 0; i < numbers.length; i++) {
//     answer = answer.replaceAll(numbers[i], i);
//   }

//   console.log(answer);
// }

console.log(solution('one4seveneight'));
