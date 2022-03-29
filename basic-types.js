// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types parameters
// Primitives
// - Explicitly Types
var age;
age = 24;
console.log("Age: ".concat(age));
var userName;
userName = 'Morne';
console.log("Username: ".concat(userName));
var isValid;
isValid = true;
console.log("Is Valid: ".concat(isValid));
// More Complex types
// - any (explicitly types)
var foo;
foo = 'some string';
foo = 1;
foo = false;
// - inferred
var bar;
bar = 'some string';
bar = 1;
bar = false;
// - array
var hobbies;
hobbies = ['reading', 'writing'];
console.log("Hobbies: ".concat(hobbies));
// - objects
var person;
person = {
    name: 'Morne Louw',
    age: 47,
    isMale: true
};
console.log("Person:", person);
// - specificly structured type
var vehicle;
// valid
vehicle = {
    make: 'Volkswagen',
    model: 'Caddy 2.0 TDI',
    year: 2012,
    isNew: false
};
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
var vehicles;
vehicles = [];
vehicles.push({
    make: 'Volkswagen',
    model: 'Caddy 2.0 TDI',
    year: 2012,
    isNew: false
});
vehicles.push({
    make: 'Renault',
    model: 'Sandero 1.6',
    year: 2015,
    isNew: false
});
// TYPE INFERENCE
// - Type Inferred from amount at declaration
var amount = 10.15;
console.log("Amount: ".concat(amount));
// // - invalid
// amount = '10.15'
// UNION TYPES
var flexible;
flexible = 1;
flexible = 'String';
var dog;
dog = {
    species: "Dog",
    mammal: true,
    legs: 4
};
var fish;
fish = {
    species: "Fish",
    mammal: false,
    legs: 0
};
var animals;
animals = [dog, fish];
// Functions & Types
// - inferred returned type: number
function add(a, b) {
    return a + b;
}
// No return Type: void
function printSomething(name) {
    console.log("Name: ".concat(name));
}
