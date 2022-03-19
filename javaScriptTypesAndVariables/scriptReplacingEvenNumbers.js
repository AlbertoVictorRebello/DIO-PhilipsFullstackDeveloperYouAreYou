let input = prompt("Inform an array of numbers:").split(" ");
let output;

if (input.prototype === undefined) {
    output = -1

} else {
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            output += " " + "0";
        } else {
            output += " " + input[i];
        }
        
    }
}

alert(output);

