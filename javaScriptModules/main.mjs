import * as functionsModule from "./functions.mjs";

let name = prompt("What is your name?");
let age = prompt("How old are you?");
let city = prompt("What is the city do you live?")
let hobby = prompt("Wich hobby do you practice?")

alert(functionsModule.showAge(name, age));
alert(functionsModule.showCity(name, city));
alert(functionsModule.showHobby(name, hobby));