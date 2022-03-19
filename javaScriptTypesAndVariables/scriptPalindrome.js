// Check if a string is a palindrome:

let input = prompt("Do you want to check if a string is a palindrome? Please, type it here:");
let option = Number(prompt("Please, choose wich technic sall be applied:\n 1 - Reverse Comparation \n 2 - For Loop Checking"));
let isPalindrome;
let message;

input = input.toLocaleLowerCase().replaceAll(" ", "");

switch (option) {    
    case 1:
        isPalindrome = input === input.split("").reverse().join(""); 
        break;
    case 2: 
        isPalindrome = true;
        let lastIndex = input.length - 1;
        for ( let i = 0; i <= lastIndex; i++) {
            if (input[i] !== input[lastIndex - i]) {
                isPalindrome = false;
                break;
            }
        }
        break;
    default:
        isPalindrome = undefined;
}


if (isPalindrome === undefined) {
    message = "Ok. A valid option was not chossen. Try in another moment.";    
} else if (!isPalindrome) {
    message = "No! I am sorry. It is a regular string.";
} else {
    message = "Yeah! It is an amazing palindrome string.";
     
}

alert(message);

