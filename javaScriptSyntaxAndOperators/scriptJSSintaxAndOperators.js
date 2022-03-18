let myFunction = function(param1, param2) {
    let message = `The numbers ${ param1 } and ${ param2 } `;    
    if (param1 == param2) {
        message += "are equal.";       
    } else {
        message += "are not equal.";
    }

    if (param1 + param2 > 10) {
        message += `Their sum is ${ param1 + param2}, that is greater than 10 `;          
    } else {
        message += `Their sum is ${ param1 + param2}, that is lower than 10 `;
    }

    if (param1 + param2 > 20) {
        message += `and is greater than 20.`;         
    } else {
        message += `and is lower than 20.`;
    }

    alert(message);
}

let param1 = Number(prompt("Please, inform the first numeber:"));
let param2 = Number(prompt("Please, inform the second numeber:"));
myFunction(param1, param2);

