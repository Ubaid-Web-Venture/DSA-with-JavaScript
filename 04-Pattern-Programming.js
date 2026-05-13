/*
// ... pattern programming ...  //
// Square Pattern
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
// Right-Angled Triangle (Stars)
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
// Right-Angled Triangle (Numbers)
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + "");
  }
  console.log();
}
//Right-Angled Triangle (Alphabets)
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + " ");
    ascii++;
  }
  console.log();
}
//Inverted Triangle (Stars)
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
  // Inverted Triangle (Another Way)
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("*");
  }
  console.log();
}

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("   ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" * ");
  }
  console.log();
}
 //star Pyramid Pattern 
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }

  console.log();
}
// X Pattern
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j == n + 1) {
      process.stdout.write("* ");
    } else process.stdout.write("  ");
  }
  console.log();
}

// upper half of an X pattern
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i === j || i + j == 2 * n) {
      process.stdout.write("* ");
    } else process.stdout.write("  ");
  }
  console.log();
}
*/
