function solution(sizes) {
  const _sizes = sizes;

  for (let i = 0; i < _sizes.length; i++) {
    if (_sizes[i][0] < _sizes[i][1]) {
      let temp = _sizes[i][1];
      _sizes[i][1] = _sizes[i][0];
      _sizes[i][0] = temp;
    }
  }

  const widths = [..._sizes.sort((a, b) => b[0] - a[0])];
  const height = [..._sizes.sort((a, b) => b[1] - a[1])];

  return widths[0][0] * height[0][1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

70;
