// function solution(ingredient) {
//   const hamburger = '1231';
//   let answer = 0;
//   let _ingredient = ingredient.join('');
//   let preLength;

//   do {
//     preLength = _ingredient.length;
//     _ingredient = _ingredient.replace(hamburger, '');

//     if (_ingredient.length !== preLength) {
//       answer++;
//     }
//   } while (_ingredient.length !== preLength);

//   return answer;
// }

function solution(ingredient) {
  let answer = 0;
  let hamburger = [];
  const pattern = '1231';

  for (let i = 0; i < ingredient.length; i++) {
    hamburger.push(`${ingredient[i]}`);

    if (hamburger.length < 4) {
      continue;
    }

    const hamburgerLength = hamburger.length;
    const tempHamburger =
      hamburger[hamburgerLength - 4] +
      hamburger[hamburgerLength - 3] +
      hamburger[hamburgerLength - 2] +
      hamburger[hamburgerLength - 1];

    if (tempHamburger === pattern) {
      hamburger.pop();
      hamburger.pop();
      hamburger.pop();
      hamburger.pop();
      answer++;
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
