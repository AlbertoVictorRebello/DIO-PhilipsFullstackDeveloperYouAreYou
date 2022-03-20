

function arrayValidation(array, number) {    
    try {
        if (!array || !number) throw new ReferenceError(
            "Missing parameter(s). Please, include them.")
        if (typeof array !== 'object') throw new TypeError(
            "Type mismatch: array shall be an object."
        );
        if (typeof number !== 'number') throw new TypeError(
            "Type mismatch: number shall be a number."
        );
        if (array.length != number) throw new RangeError(            
            "The array's length is not correct."
        );
        return array;
    } catch (e) {
        
            if (e instanceof ReferenceError) {
                console.log("This is a Reference Error");
                console.log(e.message);
            } else if (e instanceof TypeError) {
                console.log(e.name);
                console.log(e.message);

            } else if (e instanceof RangeError) {
                console.log(e.stack);
                console.log(e.message);
            } else {
                console.log("Unexspected Error.");
            }      
    }    
}

console.log(arrayValidation());
console.log(arrayValidation(5, 5));
console.log(arrayValidation([], "1"));
console.log(arrayValidation([], 5));
console.log(arrayValidation([1, 2, 3], 3));
