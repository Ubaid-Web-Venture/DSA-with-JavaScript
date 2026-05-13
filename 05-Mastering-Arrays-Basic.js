/*
let arr = [];
arr.push(100);
arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr[1]);

console.log(arr);
let a = 20;
console.log(a);
// Out put
// 10
// (4) [100, 10, 20, 30]
// 20

console.log(arr);
arr.pop();
console.log(arr);
//Out put (4) [100, 10, 20, 30]
//  (3) [100, 10, 20]
 
let arr = [];
arr[0] = 100;
arr[1] = 20;
arr[2] = 30;

arr[7] = 150;

console.log(arr);
// Out Put
// (8) [100, 20, 30, empty × 4, 150]


let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr);
// Out Put
// (3) [10, 20, 30]

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 100;
console.log(arr);
// Out Put
// (4) [10, 20, 30, 100]


let arr = new Array(3);
arr.push(0);
console.log(arr);
// Out Put
//(4) [empty × 3, 0]


let arr = new Array(5);
arr[0] = Number(prompt("Enter avalvue"));
arr[1] = Number(prompt("Enter avalvue"));
arr[2] = Number(prompt("Enter avalvue"));
arr[3] = Number(prompt("Enter avalvue"));
arr[4] = Number(prompt("Enter avalvue"));

console.log(arr);
// Out Put 
// (5) [value 01, value 02, value 03, value 04, value 05]
// (5) [1, 2, 5, 4, 12]

let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter a values"));
}
console.log(arr);

// Out Put
// (5) [value 01, value 02, value 03, value 04, value 05]
// (5) [1, 2, 5, 4, 12]


let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);
// Out Put 
// 150


let arr = new Array(5);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter a values"));
  sum = sum + arr[i];
}
console.log(sum);


let arr = [10, 2, 78, 100, 64];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
// Out Put
// 100

let arr = [10, 2, 78, 100, 64, 49, 30];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax) {
    sMax = arr[i];
  }
}
console.log(sMax);
// Out Put
// 78

let arr = [10, 2, 40, 40, 40, 40, 30];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && max != arr[i]) {
    sMax = arr[i];
  }
}
console.log(sMax);
// Out Put
// 30

// with extra space
let arr = [10, 20, 30, 40, 50];
let temp = new Array(arr.length);

let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);
// Out Put 
// [50, 40, 30, 20, 10]


// without extra space
let arr = [10, 20, 30, 40, 50];
let i = 0,
  j = arr.length - 1;

while (i != j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);
// Out Put 
// [50, 40, 30, 20, 10]

let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];
let i = 0,
  j = 0;
while (i < arr.length) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);
// Out put
//  [0, 0, 0, 0, 1, 1, 1, 1, 1]
*/
