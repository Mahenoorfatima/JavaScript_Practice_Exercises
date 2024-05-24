// Get values for a and b from the user
var a = prompt("Enter the value for a:");
var b = prompt("Enter the value for b:");

// Parse the input values as numbers
a = parseFloat(a);
b = parseFloat(b);

// Check if the input is valid numbers
if (!isNaN(a) && !isNaN(b)) {
  // Square the values of a and b
  var squaredSum = Math.pow(a, 2) + Math.pow(b, 2);

  // Find the square root of the sum
  var result = Math.sqrt(squaredSum);

  // Print the result to the console
  console.log("The square root of the sum of squared values of a and b is: " + result);
} else {
  console.log("Invalid input. Please enter valid numbers for a and b.");
}

// var a = prompt("Write the value of a");
// console.log(a);

// var b = prompt("write the value of b");
// console.log(b);

// var squareA = (a * a);
// console.log(squareA);

// var squareB = (b * b);
// console.log(squareB);

// var add = (squareA + squareB);
// console.log(add);

// var squareRootValue = (add / 2);
// console.log(squareRootValue)
// Math.sqrt()
// // console.log(a ,b)


// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);