
// Primitive types

// Using var to declare a variable
// boolean
var tOrF = false;
console.log(typeof(tOrF));


// number
var anyNumber = 1;
console.log(typeof(anyNumber));


// string
var anyString = "Alberto";
console.log(typeof(anyString));

// a function
var anyFunction = function() {};
console.log(typeof(anyFunction));

// undefined
var anyType;
console.log(typeof(anyType));

// Using let to declare a variable
//number
let anyNumberLet = 1;
console.log(typeof(anyNumberLet));

// Using const to declare a variable
//number
const anyNumberConst = 1;
console.log(typeof(anyNumberConst));
// anyNumberConst = 1; // Uncaught TypeError: Assignment to constant variable. at script.js:36:16 (the number line may change in your code)

// Do not use keywords as variables' identifiers
// var false = false // 'false' is not allowed as a variable declaration name.ts(1389
