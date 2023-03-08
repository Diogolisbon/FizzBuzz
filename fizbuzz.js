
/* Option 1: 
for (var i=1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} */

//option 2:

function isDivisible(numa, num) {
    if (numa % num == 0) {
      return true;
    } else {
      return false;
    }
  };
  
  function by3(num) {
    if (isDivisible(num, 3)) {
      console.log("Fizz");
    } else {
      return false;
    }
  };
  
  function by5(num) {
    if (isDivisible(num, 5)) {
      console.log("Buzz");
    } else {
      return false;
    }
  };
  
  for (var a=1; a<=100; a++) {
    if (by3(a)) {
      by3(a);
      if (by5(a)) {
        by5(a);
        console.log("\n");
      } else {
        console.log("\n");
      }
    } else if (by5(a)) {
      by5(a);
      console.log("\n");
    } else {
      console.log(a+"\n")
    }
  }