// Generics
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generics is a way of enforcing inferrence on function parameters
// In cases where a parameter to a function can be of type any, but you don't want to use the literal
//  type "any" you can set up a Generic
// type "any", does not give you any type-safety
// eg
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
// Due to "any" types, above, this will be valid
var numbersArray = [1, 2, 3];
var newNumbersArray = insertAtBeginning(numbersArray, 9);
var result = newNumbersArray[0] - newNumbersArray[1];
// Due to "any" types, above, this will be valid
var stringsArray = ['alpha', 'bravo', 'charlie'];
var newStringsArray = insertAtBeginning(stringsArray, 'zulu');
var splitString = newStringsArray[0].split('');
// But ooops...
// Due to "any" this TS will not WARN, but this will fail at runtime, because you CANNOT use split on Numbers
// Error in console: "generics-basics.js:30 Uncaught TypeError: newNumbersArray[0].split is not a function"
// const oops1 = newNumbersArray[0].split('');
// console.log(oops1);
// Due to "any" this TS will not WARN, but this will fail at runtime, because you CANNOT minus a string from another
var oops2 = newStringsArray[0] - newStringsArray[1];
console.log(oops2);
