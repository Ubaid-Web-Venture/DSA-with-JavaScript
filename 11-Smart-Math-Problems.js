/*
let a = 32;
let b = 20;

while (a != b) {
  if (a > b) a = a - b;
  else b = b - a;
}
console.log(a);

function gdc(a, b) {
  if (a == b) return a;
  if (a > b) return gdc(a - b, b);
  return gdc(b, b - a);
}

let n = 100;
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i == 0) {
    process.stdout.write(i + " ");
  }
}
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i == 0) {
    if (n / i != i) {
      process.stdout.write(n / i + " ");
    }
  }
}

for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i == 0) {
    process.stdout.write(i + " ");
  }
}
for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
  if (n % i == 0) {
    if (n / i != i) {
      process.stdout.write(n / i + " ");
    }
  }
}

let n = 100;
let arr = new Array(n + 1).fill(true);
for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
}
for (let i = 2; i < arr.length; i++) {
  if (arr[i]) process.stdout.write(i + " ");
}
*/
var myPow = function (x, n) {
  if (n == 0) return 1.0;
  let ans = temp(x, n);
  return n < 0 ? 1 / ans : ans;
};

var temp = function (x, n) {
  if (n === 0) return 1;
  let ans = temp(x, parseInt(n / 2));
  if (n % 2 == 0) return ans * ans;
  return ans * ans * x;
};
