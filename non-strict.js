console.log("Non-strict mode:");

x = 10;
console.log(x);

function test() {
  y = 20;
}
test();
console.log(y);

/*
a) Non-strict: Writing to a variable that wasn't declared makes it a global variable.
  The code runs and no error appears, but this can cause unexpected bugs later.

b) Strict: Doing the same thing would immediately throw an error, stopping the code.
  That helps you find and fix mistakes early.

c) Why prefer strict: It prevents hidden mistakes (like accidental global variables),
  so code is safer and easier to maintain.
*/