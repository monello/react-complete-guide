// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types parameters

// Primitives
// - Explicitly Types
let age: number;
age = 24;
console.log(`Age: ${age}`);

let userName: string;
userName = 'Morne';
console.log(`Username: ${userName}`);

let isValid: boolean;
isValid = true;
console.log(`Is Valid: ${isValid}`);

// More Complex types
// - any (explicitly types)
let foo: any;
foo = 'some string';
foo = 1;
foo = false;

// - inferred
let bar;
bar = 'some string';
bar = 1;
bar = false;

// - array
let hobbies: string[];
hobbies = ['reading', 'writing'];
console.log(`Hobbies: ${hobbies}`);

// - objects
let person: object;
person = {
    name: 'Morne Louw',
    age: 47,
    isMale: true
}
console.log("Person:", person);

// - specificly structured type
let vehicle: {
    make: string,
    model: string,
    year: number,
    isNew: boolean
}

// valid
vehicle = {
    make: 'Volkswagen',
    model: 'Caddy 2.0 TDI',
    year: 2012,
    isNew: false
}

// // Invalid (missing properties)
// vehicle = {
//     make: 'Ford'
// }

// // Invalid (trying to add a property that does not exist)
// vehicle = {
//     make: 'Volkswagen',
//     model: 'Caddy 2.0 TDI',
//     year: 2012,
//     isNew: false,
//     isAutomatic: false
// }



// Any is very loose and sortof misses the point of using typescript, but there might be scenarios when
//  we cannot know what type to expect and may have to use any, but use it as a last resort and avoid as much as possible
//  because it gives no type-safety

// Combining Types
let vehicles: {
    make: string,
    model: string,
    year: number,
    isNew: boolean
}[];
vehicles = [];
vehicles.push({
    make: 'Volkswagen',
    model: 'Caddy 2.0 TDI',
    year: 2012,
    isNew: false
})

vehicles.push({
    make: 'Renault',
    model: 'Sandero 1.6',
    year: 2015,
    isNew: false
})

// TYPE INFERENCE

// - Type Inferred from amount at declaration
let amount = 10.15;
console.log(`Amount: ${amount}`);

// // - invalid
// amount = '10.15'

// UNION TYPES

let flexible: number | string
flexible = 1;
flexible = 'String'
// // - invalid
// flexible = false;

// TYPE ALIAS

type Animal = {
    species: string
    mammal: boolean
    legs: number
}

let dog: Animal;
dog = {
    species: "Dog",
    mammal: true,
    legs: 4
}

let fish: Animal;
fish = {
    species: "Fish",
    mammal: false,
    legs: 0
}

let animals: Animal[];
animals = [dog, fish];

// Functions & Types
// - inferred returned type: number
function add(a: number, b: number) {
    return a + b
}

// No return Type: void

function printSomething(name: string): void {
    console.log(`Name: ${name}`);
}
