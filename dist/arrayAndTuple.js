/**
 * Exercise 2 - Arrays and Tuples
 * @author Spencer Pepe
 */
let numbers; // declaration method 1
let numbersAlt; // declaration method 2
numbers = [1, 2, 3, 4, 5];
numbersAlt = numbers;
console.log(`numbers: ${numbers}`);
console.log(`numbersAlt: ${numbersAlt}`);
let strings; // declaration method 1
let stringsAlt; // declaration method 2
strings = ['1', '2', '3'];
stringsAlt = strings;
console.log(`strings: ${strings}`);
console.log(`stringsAlt: ${stringsAlt}`);
let coord; // tuple: array with set number
//  of elements
coord = [0, '0'];
let mixedTypes; // mixed type tuple
mixedTypes = [...coord, true];
console.log(mixedTypes);
/**
 * Exercise 3 - any, void, null and undefined
 */
let justLikeJS; // how to defeat the purpose of TS
justLikeJS = 2; // usecase: prototyping?
justLikeJS = 'two';
// void type
function printToTheConsole() {
    console.log('some text');
}
let test; // makes sense for functions
test = undefined; // not so much for variables
let age = 25;
let personData = {
    name: 'Spencer',
    age,
};
let personAge;
personAge = personData.age;
console.log(personAge);
export {};
//# sourceMappingURL=arrayAndTuple.js.map