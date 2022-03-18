var a = "6";
var b = 6;


// And
console.log(`${ a } === ${ b } && ${a} == ${b}: `.concat(a === b && a == b)) // false


// Not
console.log(`!(${a} === ${b} && ${a} == ${b}): `.concat(!(a === b && a == b))) // true

// Or 
console.log(`${a} === ${b} || ${a} == ${b}: `.concat(a === b || a == b)) // true