// ... sum of two integer and string
// ... Relation between integer and string
/*let a = 12;
/*let u = 14;
let b = "13";

console.log(a + u);
//output  26
console.log(a + b);
//output  1213
console.log(typeof(a + b));
//output  string
*/

// ... sum and message
/*
let a = 10;
let b = 20;

console.log("sum of 10 and 20" + a + b);
//output sum of 10 and 201020

console.log("sum of 10 and 20 " + (a + b));
//output sum of 10 and 20 30

// ... type coercion
console.log("1" + 1);
console.log("1" - 1);
console.log("1" * 1);
console.log("1" / 1);
//output  11, 0, 1, 1
*/

// ... Accept and print answer ... //
/*
let age1 = prompt("what is your age");
console.log(age1);

let age2 = Number(prompt("what is your age"));
console.log(age2);

// type casting
let age3 = prompt("what is your age");
age3 = Number(age3);
console.log(age3);

console.log(typeof age1);
console.log(typeof age2);
console.log(typeof age3);
*/

// ... Swap two variables via 3 methods ... ///
/*
let a1 = 10;
let b1 = 20;
let c1;

c1 = a1;
a1 = b1;
b1 = c1;

console.log(a1); //output  20
console.log(b1); //output  10

let a2 = 10;
let b2 = 20;

a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;

console.log(a2); //output  20
console.log(b2); //output  10

let a3 = 10;
let b3 = 20;

[a3, b3] = [b3, a3];

console.log(a3, b3);
//output  20  10
*/

// ... Arithmetic operators " + , - , * , / , % , " ... //
/*
let a1 = 12;
let b1 = 22;
console.log(a1 / b1); //output 0.5454545454545454
console.log(Math.floor(a1 / b1)); //output 0

let a2 = 7;
let b2 = 2;
console.log(a2 % b2); //output 1
console.log(b2 % a2); //output 2

let a3 = 4563;

console.log(a3 % 10);
console.log(a3 % 100);
console.log(a3 % 1000);
console.log(a3 % 10000);
console.log(a3 % 100000);
*/
// ... Relational operator ... //
// " >, <, <=, >=, !==, ==, ===,"
/*// Greater Than
console.log(10 > 5); //output true
console.log(2 > 5); //output false
// Less Than
console.log(5 < 10); //output true
console.log(5 < 2); //output false
// Greater Than or equal to
console.log(10 >= 10); //output true
console.log(10 >= 7); //output true
// Less Than or equal to
console.log(7 <= 10); //output true
console.log(10 <= 10); //output true
// Not equal
console.log(10 != 10); //output true
console.log(10 != 11); //output false
// Not equal value or not equal type
console.log(10 !== 10); //output true
console.log(10 !== 11); //output false
// Equal to
console.log(13 == 13); //output true
console.log(13 == "13"); //output true
// Equal value or equal type
console.log(13 === 13); //output true
console.log(13 === "13"); //output false
 */

/*
// ... LOGICAL OPERATOR ... //
// Logical AND Operator "
console.log(10 > 6 && 5 < 9);
console.log(10 > 6 && 20 < 9);
// Logical OR Operator "
console.log(10 > 6 || 5 < 9);
console.log(10 > 6 || 20 < 9);
// Logical Not Operator "
console.log(!10 > 6);
console.log(!1 > 6);
*/
/*
// unary operator ++ --
let i = 11;
i = i++ + ++i;
console.log(i);

let a = 11,
  b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);

let d = true;
d++;
console.log(d);
let e = false;
e++;
console.log(e);
*/
/*
console.log(Math.round(10.5)); //output 11
console.log(Math.ceil(10.1)); //output 11
console.log(Math.floor(10.8)); //output 10
console.log(Math.trunc(18.98)); //output 18
console.log(Math.pow(2, 5)); //output 32
console.log(Math.sqrt(25)); //output 5
console.log(Math.cbrt(27)); //output 3
console.log(Math.abs(-10)); //output 10
console.log(Math.max(78, 60, 14)); //output 78
console.log(Math.min(78, 60, 14)); //output 14
console.log(Math.random()); //output random
let a = 89.09835;
console.log(a.toFixed(2)); //output 89.09 (String)
*/
/*
// calculate area and perimeter of rectangle
let length = 10;
let width = 5;

let area = length * width;
let perimeter = 2 * (length + width);

console.log("Area = " + area);
console.log("Perimeter = " + perimeter);

// Generate OTP
console.log(Math.trunc(Math.random() * 9000 + 1000)); //output random

// are of triangle by heron's formula
let a = 5;
let b = 4;
let c = 3;

let s = (a + b + c) / 2;
console.log(s);

console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));

// Circumference of circle*/
let radius = 12;
let circumference = 2 * Math.PI * radius;
console.log("Circumference = " + circumference);
