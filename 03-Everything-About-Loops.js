/*// loop
// for while do-while

//for (startTrnition; end; change) {}
// ... print n hello worlds using loop ...//
for (let i = 1; i < 23; i++) {
  console.log(i);
}
  for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ... One to n number and vice versa for ... // 
for (let i = 200; i > 99; i--) {
  console.log(i);
}

var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var sum = 0;
      for (var i = 1; i <= n; i++) {
        sum = sum + i;
      }
      console.log(sum);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

// ... Sum of n natural numbers and factorial of number
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var fact = 1;
      for (var i = 1; i <= n; i++) {
        fact = fact * i;
      }
      console.log(fact);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

// Factors of number
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      for (var i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          console.log(i);
        }
      }
      console.log(n);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
 
//Prime Number Cheacker
 
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var primeHai = true;
      for (var i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          primeHai = false;
          break;
        }
      }
      console.log(primeHai);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}


// Prime Number
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      console.log(isPrime(n));
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

for (var i = 1; i < 23; i++) {
  if (i === 11) break;
  else console.log(i);
}
for (var i = 1; i < 23; i++) {
  if (i === 11) continue;
  else console.log(i);
}
 // While Loop
var ans = prompt("kuch bhi dedo (exit for close?");
while (ans !== "exit") {
  ans = prompt("kuch bhi dedo (exit for close?");
}

// sum of digit
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var sum = 0;
      while (n > 0) {
        var rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
      }
      console.log(sum);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

// reverse of number
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var rev = 0;
      while (n > 0) {
        var rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
      }
      console.log(rev);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

// Strong Number 
var pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid input");
  } else {
    if (n > 0) {
      var sum = 0;
      var copy = n;
      while (n > 0) {
        var rem = n % 10;
        var fact = 1;
        for (var i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
      }
      if (copy === sum) {
        console.log("strong");
      } else {
        console.log("not strong");
      }
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

// Do While loop

var i = 1;
do {
  console.log("hey");
  i++;
} while (i <= 10);

let ans;

do {
  ans = prompt("kuch bhi dedo (exit for close)?");
} while (Number(ans) !== 0);
*/
//guess the number
let random = Math.floor(Math.random() * 100) + 1;

let guess = -1;
while (guess !== random) {
  guess = Number(prompt("Guess the number"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("try again b/w 1 - 100");
    continue;
  }
  if (guess > random) {
    console.log("too high, try again");
  } else if (guess < random) {
    console.log("too Low, try again");
  } else {
    console.log("Congrats and number was ", guess);
  }
}
