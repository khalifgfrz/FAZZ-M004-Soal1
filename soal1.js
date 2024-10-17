function soal1(ranked, player) {
  let rank = [...new Set(ranked)];

  let res = [];

  let i = rank.length - 1;

  for (let j = 0; j < player.length; j++) {
    let score = player[j];
    while (i >= 0 && score >= rank[i]) {
      i--;
    }
    res.push(i + 2);
  }

  return res;
}

let ranked = [100, 90, 90, 80];
let player = [70, 80, 105];

console.log(soal1(ranked, player));
