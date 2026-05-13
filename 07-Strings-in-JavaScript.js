/*
let s = "ubaid";

// slice(start, end): index 1 se 3 tak cut karega (4 exclude hota hai)
console.log(s.slice(1, 4)); // Output: "bai"

// slice(-4, length): end se 4th letter se end tak
console.log(s.slice(-4, s.length)); // Output: "baid"

// substring(0, 3): index 0 se 2 tak, negative index support nahi karta
console.log(s.substring(0, 3)); // Output: "uba"

// toUpperCase(): sab letters capital mein
console.log(s.toUpperCase()); // Output: "UBAID"

// toLowerCase(): sab letters small mein
console.log(s.toLowerCase()); // Output: "ubaid"

// concat(): string ko jodta hai
console.log(s.concat(" ", "world")); // Output: "ubaid world"

// indexOf("a"): pehla 'a' kis index pe hai
console.log(s.indexOf("a")); // Output: 2

// lastIndexOf("a"): aakhri 'a' kis index pe hai
console.log(s.lastIndexOf("a")); // Output: 2

// includes("ai"): kya "ai" string mein hai?
console.log(s.includes("ai")); // Output: true

// startsWith("ub"): kya string "ub" se start hoti hai?
console.log(s.startsWith("ub")); // Output: true

// endsWith("id"): kya string "id" pe end hoti hai?
console.log(s.endsWith("id")); // Output: true

// replace("u", "U"): pehla 'u' ko 'U' se replace karega
console.log(s.replace("u", "U")); // Output: "Ubaid"

// replaceAll("a", "@"): sabhi 'a' ko '@' se replace karega
console.log(s.replaceAll("a", "@")); // Output: "ub@id"

// split(): string ko array mein badal deta hai, yahan kuch nahi dia to pura string aik item ban gaya
console.log(s.split()); // Output: ["ubaid"]

// s[2]: 3rd letter (index 2) print karega
console.log(s[2]); // Output: "a"

// charAt(2): same kaam karta hai s[2] jaisa
console.log(s.charAt(2)); // Output: "a"

// charCodeAt(2): 3rd character 'a' ka ASCII code
console.log(s.charCodeAt(2)); // Output: 97

// trim(): string ke start aur end ke spaces hata deta hai
let t = "       ubaid        ";
console.log(t.trim()); // Output: "ubaid"


// Print each character on new line
let s = "ubaid";
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}
for (let i = 0; i < s.length; i++) {
  console.log(s.charAt(i));
}
// Print each character reverse on new line

for (let i = s.length - 1; i >= 0; i--) {
  console.log(s[i]);
}
for (let i = s.length - 1; i >= 0; i--) {
  console.log(s.charAt(i));
}
// Print reverse order
let s = "ubaid";
let rev = "";

for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i);
}
console.log(rev);
 
// check if string is Pallindrome or not
let s = prompt("Enter a String");
let rev = "";

for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i);
}
if (rev == s) console.log("Pallindrome");
else console.log("is not Pallindrome");


let s = prompt("Enter a String");
let isPallindrome = true;

let i = 0,
  j = s.length - 1;
while (i < j) {
  if (s.charAt(i) != s.charAt(j)) {
    isPallindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPallindrome) console.log("Pallindrome");
else console.log("no pllindome");

let s = prompt("Enter a String");
console.log(s);

//Toggle each character

let toggle = "";
for (let i = 0; i < s.length - 1; i++) {
  let ch = s.charAt(i);

  if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
    toggle = toggle + String.fromCharCode(s.charCodeAt(i) + 32);
  } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
    toggle = toggle + String.fromCharCode(s.charCodeAt(i) - 32);
  }
}
console.log(toggle);


let s = prompt("Enter a String");
console.log(s);

let toggle = "";
for (let i = 0; i < s.length - 1; i++) {
  let ch = s.charCodeAt(i);

  if (ch >= 65 && ch <= 90) {
    toggle = toggle + String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle = toggle + String.fromCharCode(ch - 32);
  }
}
console.log(toggle);

// Frequency of each character
let s = prompt("Enter a String");
let arr = new Array(128).fill(0);

for (let i = 0; i < s.length; i++) {
  let indx = s.charCodeAt(i);
  arr[indx] = arr[indx] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + " appears at " + arr[i] + " times ");
  }
}
*/
