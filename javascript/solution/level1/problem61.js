function solution(board, moves) {
  let answer = 0;
  const basket = [];

  for (let i = 0; i < moves.length; i++) {
    const turn = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][turn] > 0) {
        basket.push(board[j][turn]);
        board[j][turn] = 0;
        break;
      }
    }

    if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
      basket.splice(basket.length - 2, 2);
      answer += 2;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [0, 2, 4, 4, 2],
      [0, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

// moves 만큼 반복문 필요
// board의 수 만큼 2중 반복문 필요
// 우리는 위치의 숫자를 정할 수 있다. => moves

// 스택에 쌓기
// - 제거하기
// - 위치 찾기
// 터트리기
