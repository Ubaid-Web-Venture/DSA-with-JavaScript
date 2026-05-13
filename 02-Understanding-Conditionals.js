/*
// valid voter
let ans = Number(prompt("what is your age ?"));

if (isNaN(ans)) {
  console.log("wrong information");
} else if (ans >= 18) {
  console.log("You can vote");
} else {
  console.log("you can not vote");
}


// Shop Dsicount
let amount = Number(prompt("what is the final amount "));
if (amount > 0 && amount <= 5000) {
  console.log(amount);
} else if (amount > 5000 && amount <= 7000) {
  console.log(amount - Math.floor((5 * amount) / 100));
} else if (amount > 7000 && amount <= 9000) {
  console.log(amount - Math.floor((10 * amount) / 100));
} else if (amount > 9000) {
  console.log(amount - Math.floor((20 * amount) / 100));
} else {
  console.log("Enter Valid value");
}

let amount = Number(prompt("what is the final amount "));
let dis = 0;
if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5001 && amount <= 7000) {
  dis = 5;
} else if (amount > 7001 && amount <= 9000) {
  dis = 10;
} else if (amount > 9001) {
  dis = 20;
} else {
  console.log("Enter Valid value");
}
console.log(amount - Math.floor((dis * amount) / 100));

// Bijli Bill
let unit = Number(prompt("Enter electricity Unit"));
let amount = 0;
if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;
console.log(amount);

// ... PKR Denomination  ... //

let amount = 4838;
if (amount >= 1000) {
  console.log("1000 notes : " + Math.floor(amount / 1000));
  amount = amount % 1000;
}
if (amount >= 500) {
  console.log("500 notes : " + Math.floor(amount / 500));
  amount = amount % 500;
}
if (amount >= 100) {
  console.log("100 notes : " + Math.floor(amount / 100));
  amount = amount % 100;
}
if (amount >= 50) {
  console.log("50 notes : " + Math.floor(amount / 50));
  amount = amount % 50;
}
if (amount >= 20) {
  console.log("20 notes : " + Math.floor(amount / 500));
  amount = amount % 20;
}
if (amount >= 10) {
  console.log("10 notes : " + Math.floor(amount / 10));
  amount = amount % 10;
}
if (amount >= 5) {
  console.log("5 coin : " + Math.floor(amount / 5));
  amount = amount % 5;
}
if (amount >= 2) {
  console.log("2 coin : " + Math.floor(amount / 2));
  amount = amount % 2;
}
if (amount === 1) {
  console.log("1 coin : " + amount);
}


// ternary operator ? :

12 > 13 ? console.log("hehehehe") : console.log("huhuhuhu");
console.log(122 > 13 ? "hello" : "hey");

// nested ternary operator

let num = 10;
console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero");


let day = 3;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("invalid");
}

switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("tuesday");
    break;
  default:
    console.log("invalid");
}
switch (true) {
  case 19 < 6:
    console.log("hello");
    break;
  case 10 > 9:
    console.log("hey");
    break;
  default:
    console.log("invalid");
}

let num = +(0.1 + 0.2).toFixed(1); // force 0.3

switch (num) {
  case 0.3:
    console.log("hello");
    break;
  default:
    console.log("Asalam Alikum");
    break;
}
*/
