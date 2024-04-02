/**
 * Exercise 2 - Arrays and Tuples
 * @author Spencer Pepe
 */

let numbers: number[];                      // declaration method 1
let numbersAlt: Array<number>;              // declaration method 2

numbers = [1,2,3,4,5];
numbersAlt = numbers;

console.log(`numbers: ${numbers}`);
console.log(`numbersAlt: ${numbersAlt}`);

let strings: string[];                      // declaration method 1
let stringsAlt: Array<string>;              // declaration method 2

strings = ['1', '2', '3'];
stringsAlt = strings;

console.log(`strings: ${strings}`);
console.log(`stringsAlt: ${stringsAlt}`);

let coord: [number, number];                // tuple: array with set number
                                            //  of elements
coord = [0, 0];

let mixedTypes: [number, string, boolean];  // mixed type tuple
mixedTypes = [1, '2', true];

console.log(mixedTypes);