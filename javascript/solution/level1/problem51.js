function solution(babbling) {
  var answer = 0;
  const sounds = { aya: true, ye: true, woo: true, ma: true };

  for (let i = 0; i < babbling.length; i++) {
    let sound = '';
    let preSound = '';
    let flag = false;

    for (let j = 0; j < babbling[i].length; j++) {
      sound += babbling[i][j];
      flag = false;

      if (preSound === sound) {
        continue;
      }

      if (sounds[sound]) {
        preSound = sound;
        sound = '';
        flag = true;
      }
    }

    if (flag) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
