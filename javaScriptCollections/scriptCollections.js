const usuarios = new Map();

usuarios.set("John", "Analyst");
usuarios.set("Anna", "Engineer");
usuarios.set("Fujita", "Controller");
usuarios.set("sidney", "Admin");


function getAdmins(myMap) {
    let admins = []
    for ([Key, value] of myMap) {        
        if ( value === "Admin") {
            admins.push(Key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));

const myArray = [30, 30 ,35, 55, 21, 8, 7, 9, 0, 8, 7];

function uniqueValues(anArray) {
    const newset = new Set(anArray);
    return [...newset];
}

console.log(uniqueValues(myArray));