/*
 * 최대공약수와 최소공배수
 */

function divisor(a) {
  const array = [];

  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      array.push(i);
    }
  }

  return array;
}

function solution(n, m) {
  var answer = [];
  var a, b;
  var g = 0;
  var l = 0;

  a = divisor(n).reverse();
  b = divisor(m).reverse();

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        g = a[i];
        break;
      }
    }

    if (g > 0) {
      answer.push(g);
      break;
    }
  }

  var temp = (n * m) / g;
  answer.push(temp);

  return answer;
}

console.log(solution(2, 5));
