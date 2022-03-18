// Declarative function
console.log("Declarative function");
 function myFunction(message) {
    if (message == null) {
        console.log("I am a declarative function with one parameter");
    } else {
        console.log(message);
    }
}
console.log(myFunction);
myFunction();

// Expression function
console.log("Expression function");
let myvariable = myFunction;
console.log(myvariable);
myvariable("I am a expression function with one parameter");


