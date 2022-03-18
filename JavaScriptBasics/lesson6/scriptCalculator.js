function calculator() {
    let message = "Operations available:\n";
    message += "1 - addition (+).\n";
    message += "2 - Subtraction (-).\n";
    message += "3 - Multiplication (*).\n";
    message += "4 - Division (/).\n";
    message += "5 - Remainder (%).\n";
    message += "6 - Power (**).\n";
    message += "Choose an operation:"
    const operation = Number(prompt(message));
    
    let first = Number(prompt("Input the first value:"));
    let second = Number(prompt("Input the second value:"));

    
    switch (operation) {
        case 1:
            alert(first + second);
            break;
        case 2:
            alert(first - second);
            break;
        case 3:
            alert(first * second);
            break;
        case 4:
            if (second == 0) {
                alert("Error: division by 0");
            } else {
                alert(first / second);
            }
            break;
        case 5:
            alert(first % second);
            break;        
        case 6:
        alert(first ** second);
        break;
    } 
}

let option = 1;
while (option == 1) {
    calculator();
    option = Number(prompt("Do you want another operation?\n 1 - Yes\n 2 - No"));    
} 
