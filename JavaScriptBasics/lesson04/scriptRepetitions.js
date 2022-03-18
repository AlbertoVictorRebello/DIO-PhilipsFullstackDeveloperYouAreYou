// For loops using a condition
console.log("For loops");
let array = ['value1', 'value2', 'value3', 'value4', 'value5']
let object = {'property1': 'value1', 'property2':'value2', 'property3': 'value3'}


let myLoop = function() {
    for (let i = 0; i < array.length; i++) {
        console.log(`Index: ${ i } => ${ array[i] }`);
    }
}

console.log(myLoop);
myLoop();

// For loop using 'in' operator
console.log("For loop using 'in' operator");
let i = 0;
myLoop = function() {
    for (let member in object) {
        console.log(`${ member } is the object member nº ${ i }`);
        i++;
    }
}

console.log(myLoop);
myLoop();

// For loop using 'of' operator
console.log("For loop using 'in' operator");
i = 0;
myLoop = function() {
    for (let value of array) {
        console.log(`${ value } at index nº ${ i }`);
        i++;
    }
}

console.log(myLoop);
myLoop();

// while loop
console.log("while loop");
i = 0;
myLoop = function() {
    while (i < 10) {
        console.log(i++);
    }
}

console.log(myLoop);
myLoop();

// do ... while loop
console.log("do ... while loop");
i = 0;
myLoop = function() {
    do {
        console.log(i++);
    } while (i < 0)
}

console.log(myLoop);
myLoop();

