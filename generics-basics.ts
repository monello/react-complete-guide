// Generics

// Generics is a way of enforcing inferrence on function parameters
// In cases where a parameter to a function can be of type any, but you don't want to use the literal
//  type "any" you can set up a Generic
// type "any", does not give you any type-safety

// eg

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

// Due to "any" types, above, this will be valid
const numbersArray = [1, 2, 3];
const newNumbersArray = insertAtBeginning(numbersArray, 9);
const result = newNumbersArray[0] - newNumbersArray[1];

// Due to "any" types, above, this will be valid
const stringsArray = ['alpha', 'bravo', 'charlie'];
const newStringsArray = insertAtBeginning(stringsArray, 'zulu');
const splitString = newStringsArray[0].split('');

// But ooops...

// // Due to "any" this TS will not WARN, but this will fail at runtime, because you CANNOT use split on Numbers
// const oops1 = newNumbersArray[0].split('');
// console.log(oops1);
// // Error in console: "generics-basics.js:30 Uncaught TypeError: newNumbersArray[0].split is not a function"

// // Due to "any" this TS will not WARN, but this will fail at runtime, because you CANNOT minus a string from another
// const oops2 = newStringsArray[0] - newStringsArray[1];
// console.log(oops2);
// // Console output: "NaN"


// ------------------------
// ... with Generics
// -------------------------

function insertAtBeginning_2<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

// Due to "any" types, above, this will be valid
const numbersArray2 = [1, 2, 3];
const newNumbersArray2 = insertAtBeginning_2(numbersArray2, 9);
const result2 = newNumbersArray2[0] - newNumbersArray2[1];

// Due to "any" types, above, this will be valid
const stringsArray2 = ['alpha', 'bravo', 'charlie'];
const newStringsArray2 = insertAtBeginning_2(stringsArray2, 'zulu');
const splitString2 = newStringsArray2[0].split('');

// Due to "Generics" <T> now you will get an error in IDE and from npx tsc
// IDE & TSC says: "Property 'split' does not exist on type 'number'"
// So this code won't get to runtime
const oops3 = newNumbersArray2[0].split('');

// Due to "Generics" <T> now you will get an error in IDE and from npx tsc
// IDE & TSC says: "The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."
// So this code won't get to tuntime
const oops4 = newStringsArray2[0] - newStringsArray2[1];


/*
function insertAtBeginning_2<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

The use of the generic above <T>, tells TSC:
1. I am not able to give to a specific type for the arguments of this function
    - I want to be able to allow arrays with any types to have a number inserted at the front
      as long as as the type of this value is the same as the values in the array
2. I want you dear TSC to infer the types, based on the values being passed in when the method is called
3. Seeing as you now inferred the values that where passed in, you are able to also infer the return-type
     of the function
4. Now you will be able to warn the developer if he tries to perform actions on the returned array that
     isn't valid for this type... before it gets pushed to Production

If we use "any" we are telling JS "Don't check types, just let it through" = very risky
*/

// So even this will now error, because the Type of the "value" argument is not the same as the
//   Type of the values in the array
// const newMixedArray = insertAtBeginning_2(['a', 'b', 'c'], 5);
