function solution(nums) {
  const phonekemon = {};

  for (const value of nums) {
    phonekemon[value] = phonekemon[value] + 1 || 1;
  }

  const count = nums.length / 2;
  const phonekemonLength = Object.keys(phonekemon).length;

  if (count <= phonekemonLength) {
    return count;
  }

  return phonekemonLength;
}

console.log(solution([3, 1, 2, 3]));
