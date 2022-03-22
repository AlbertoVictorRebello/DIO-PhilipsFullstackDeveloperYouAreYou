import $ from 'jquery';

export const myNumber: number = 100;

$.fn.extend({
    newFunction(){
        console.log('newFunction was invoked.');        
    }
});

$('body').newFunction();


/*
Function's parameter Type evaluation.
*/

function sum(a: number, b: number) {
    return a + b;
}

// sum('1', '2'); // Argument of type 'string' is not assignable to parameter of type 'number'.


// Interfaces
interface IAnimal {
    name: string;
    type: 'terrestrial' | 'aquatic';
    domestic: boolean;
    makeSound(soundVolumedB: number): void;
}

interface IFeline extends IAnimal {
    nightVision: Boolean;
}

interface ICanine extends IAnimal {
    size: 'small' | 'medium' | 'large';
}

const animal: IAnimal = {
    name: 'Elephant',
    type: 'terrestrial',
    domestic: false,
    makeSound: (soundVolumedB) => (`${ soundVolumedB }`)
}

interface HalfPerson {
    firstName: string;
}

interface HalfPerson {
    lastName: string;
}

const fullPerson: HalfPerson = {
    firstName: "Alberto",
    lastName: "Rebello"
}

console.log(fullPerson);



// animal.makeSound('2') // Argument of type 'string' is not assignable to parameter of type 'number'.

const felino: IFeline = {
    name: 'Lion',
    type:  'terrestrial',
    domestic: false,
    nightVision: true,
    makeSound: (soundVolumedB) => (`${ soundVolumedB }`)
}


// Types

// The followin example is syntaticaly correct, however is not the common use for types.
type IAnimalType = {
    name: string;
    type: 'terrestrial' | 'aquatic';
    domestic: boolean;
    makeSound(soundVolumedB: number): void;
}

type iDomestic = IFeline | ICanine;

const animalType: ICanine = {
    domestic: true,
    name:'dog',
    size: 'medium',
    type: 'terrestrial', 
    makeSound: (soundVolumedB) => (`${ soundVolumedB }`)  
     
}

/*
HTML elements
*/

const input = document.getElementById('input') as HTMLInputElement;

// Due this feature, the specific input tag's property is available:
input.value = 'I am available!';
input.addEventListener('input',  (event) => {
    const inputMembers = event.currentTarget as HTMLInputElement;
    console.log(inputMembers.value);
});


/*
Generic Types:
*/

function genericComparator<T>(first: T, second: T): T {    
    return first >= second? first : second;
}

console.log('Greater: ' + genericComparator(1,2)); // Greater: 2
console.log('Greater: ' + genericComparator('1','2')); // Greater: 11
// console.log('Greater: ' + genericComparator(1,'2')); // Argument of type '"2"' is not assignable to parameter of type '1'.

/*
Conditionals using parameters:
*/

interface IUser {
    id: number;
    email: string;
    phone?: string;
}

interface IAdmin extends IUser {
    jobTitle: 'manager' |'coordinator'| 'supervisor';
}

function redirect(requester: IUser | IAdmin) {
    if ('jobTitle' in requester) {
        console.log('Redirecting to Admin Group...')        
    } else {
        if (requester.phone) {
            console.log('Redirecting to Call Center...');
        } else {
            console.log('Sending an e-mail...');
        }
    }
}

const manager: IAdmin = {
    id: 1,
    email: 'email@domain',
    jobTitle: 'manager',
    phone: '+ 55 21 99999-0909'

    
}

redirect(manager);

const customer: IUser = {
    id: 1,
    email: 'email@domain',    
}

redirect(customer);

/*
Redonly keyword
*/

interface IClothing {
    name: string;
    size: 'small' | 'medium' | 'large' | 'extra large';
    category: 'sport' | 'social'
    price?: number;
    orderCode: string;
    successRate: 1 | 2 | 3 | 4 | 5;
}

type RockBandTShirt = {
    //TOFIX Should work:  +readonly [k in keyof IClothing] - ?: IClothing[k];       
    +readonly [k in keyof IClothing]: IClothing[k];        
};

class PearlTShirt implements RockBandTShirt {
    constructor(name, size, category, price, orderCode, successRate){
        this.name = name;
        this.size = size;
        this.category = category;
        this.price = price;
        this.orderCode = orderCode;
        this.successRate = successRate;
    }
    name: string;
    size: "small" | "medium" | "large" | "extra large";
    category: 'sport' | 'social'
    price?: number;
    orderCode: string;
    successRate: 1 | 2 | 3 | 4 | 5;
}

const myPearlTShirt = new PearlTShirt('oldFashion', 'small', 'sport', 100.00, 'XPTW', 3);

console.log(myPearlTShirt);


