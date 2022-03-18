// Declaring a function without parameters

let myFunction = function() {
    console.log("I am a function without parameters");
}

console.log(myFunction);
myFunction();

// Declaring a function with parameters

myFunction = function(firstParam, secondParam) {
    console.log(
        `I am a function with parameters the following parameters:`);
        for (member of myFunction.arguments) {
            console.log(member);
        }
}

console.log(myFunction);
myFunction("I have two parameters", true);