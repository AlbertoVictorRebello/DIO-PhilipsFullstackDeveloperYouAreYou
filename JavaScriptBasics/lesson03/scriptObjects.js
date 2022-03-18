// Creating an object
let myObject = {
    "string": "a string",
    "number": 1,
    "boolean": true,
    "array":[
        "arrayString",
        2
    ],
    "myInternalObject": {
        "internalString": "another string",
        "internalNumber": 2,
        "internalBoolean": false
    }
}


// Printing the object
console.log(myObject);

// Printing an object's member
console.log(myObject.myInternalObject);

// Destructuring the object members
var {myInternalObject} = myObject;
console.log(myInternalObject);