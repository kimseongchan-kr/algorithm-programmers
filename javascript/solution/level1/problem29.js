/*
 * 직사각형 별찍기
 */

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (data) => {
//   const n = data.split(' ');
//   const a = Number(n[0]),
//     b = Number(n[1]);

//   for (let i = 0; i < b; i++) {
//     let total = '';

//     for (let j = 0; j < a; j++) {
//       total += '*';
//     }

//     console.log(total);
//   }
// });

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let total = '';

    console.log(total.padStart(a, '*'));
  }
});
