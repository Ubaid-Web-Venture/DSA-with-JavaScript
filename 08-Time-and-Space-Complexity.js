/*🔰 Big O Notation – Notation aur Meaning Detail Mein
Big O Notation ka use hum algorithm ki performance batane ke liye karte hain — matlab input size barhne par kitni der ya kitni memory lagti hai.
1. O(1) – Constant Time
Matlab: Har halat mein code ko chalne ka time fix hota hai, input kitna bhi barh jaye.
Example:*/

function getFirstElement(arr) {
  return arr[0];
}
/* Kya ho raha hai? Sirf pehla element access ho raha hai, chahe array mein 1 element ho ya 1 crore.
 Speed: Sabse fast
 Use case: Jab sirf ek particular index access karni ho.


 2. O(log n) – Logarithmic Time
Matlab: Input barhne par time thoda thoda barhta hai. Har step mein input ka half ho jata hai.
Example: Binary Search */

function binarySearch(arr, x) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) return true;
    else if (x < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return false;
}
/* Kya ho raha hai? Har baar array ka aadha discard kar rahe ho.
 Speed: Bahut fast on large data
 Example: Agar n = 1024, to sirf 10 steps mein answer mil jata hai (kyunki 2¹⁰ = 1024).
 3. O(n) – Linear Time
 Matlab: Input jitna barhta hai, time utna hi barhta hai.
 Example:*/

function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
/*
 Kya ho raha hai? Har element ek dafa check ho raha hai.
 Use case: Jab input ke har element ko process karna ho.


 4. O(n log n) – Log Linear Time
Matlab: Combination of linear aur logarithmic time.
Example: Merge Sort, Quick Sort (average case)*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
/* Kya ho raha hai? Array ko baar baar tod rahe hain (log n) aur merge kar rahe hain (n).
 Use case: Jab aapko efficiently sort karna ho.


 5. O(n²) – Quadratic Time
Matlab: Time bohot jaldi barhta hai — jab input size double hota hai, time 4x barhta hai.
Example: Nested loop*/

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

/* Kya ho raha hai? Har element ko doosre ke sath compare kar rahe ho.
Use case: Small inputs ke liye thik, large inputs ke liye slow.


6. O(2ⁿ) – Exponential Time
Matlab: Time bahut rapidly barhta hai. Input thoda bhi barhao, time double ho jata hai.
Example: Recursion with 2 calls */

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

/*Kya ho raha hai? Har function 2 baar call ho raha hai → tree ban raha hai.
Very slow — sirf choti input ke liye use hota hai.


7. O(n!) – Factorial Time
Matlab: Input barhne par time super fast grow karta hai (worst of all)
Example: Permutations ya brute force on all orders*/

function permute(arr) {
  if (arr.length <= 1) return [arr];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (let perm of permute(rest)) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

/*Bohot hi slow — input 10 ho to 10! = 3,628,800 possibilities ban jaati hain.
Table for Quick Revision
Notation	Name	Speed	Use Case
O(1)	Constant	⚡ Fastest	Specific index access
O(log n)	Logarithmic	⚡ Fast	Binary search
O(n)	Linear	✅ Good	Loop on all elements
O(n log n)	Log Linear	👍 Better	Efficient sorting
O(n²)	Quadratic	🐢 Slow	Nested loops
O(2ⁿ)	Exponential	🐌 Slower	Recursive combinations
O(n!)	Factorial	🛑 Worst	All permutations
*/
