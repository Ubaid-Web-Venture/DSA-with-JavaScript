/*
greet();
function greet() {
  console.log("Good morning pineapple");
  enjoy();
}

function enjoy() {
  console.log("enjoy ho rha hai guysss...");
  temp();
}

function temp() {
  console.log("Kuch kr rhe ho");
}


function temp(val) {
  if (val === 0) return;

  console.log("Hello world");
}
temp(10);
temp(0);


for (let i = 0; i < 5; i++) {
  console.log("hello world");
}

function temp(n) {
  if (n == 0) return;
  console.log("Hello ");
  temp(n - 1);
}

temp(5);


function temp(n) {
  if (n == 0) return;
  console.log("Hello ");
  temp(n--);
}

temp(5);


function temp(n) {
  if (n == 0) return;
  console.log("Hello ");
  temp(--n);
}

temp(5);


function temp(n) {
  if (n == 0) return;
  console.log(n);
  temp(n - 1);
}

temp(5);

function temp(n) {
  if (n == 0) return;
  console.log(n);
  temp(--n);
}

temp(10);

function temp(n) {
  if (n == 0) return;
  temp(n - 1);
  console.log(n);
}

temp(10);


function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}

console.log(sum(5));

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5));


let n = 10;
let first = 0,
  second = 1;

process.stdout.write(first + " " + second + " ");

for (let i = 1; i <= n - 2; i++) {
  let third = first + second;
  first = second;
  second = third;
  process.stdout.write(third + " ");
}


function fiboNTerms(n, first, second) {
  if (n == 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fiboNTerms(n - 1, second, third);
}

let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fiboNTerms(n - 2, 0, 1);
*/

let n = 6;

function fibo(n) {
  if (n == 0 || n == 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(n));
