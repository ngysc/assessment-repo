function feladat01(színek) {
  const színekSzáma = színek.length;
  let összeg = 0;

  for (let i = 1; i <= színekSzáma; i++) {
    összeg += kombinációk(színekSzáma, i);
  }

  return összeg;
}

function kombinációk(n, k) {
  if (k === 0 || k > n) {
    return 0;
  } else if (k === 1 || k === n) {
    return 1;
  } else {
    return kombinációk(n - 1, k - 1) + kombinációk(n - 1, k);
  }
}

const színek = ["piros, kék, zöld"];
const eredmény = feladat01(színek);
console.log(eredmény);
