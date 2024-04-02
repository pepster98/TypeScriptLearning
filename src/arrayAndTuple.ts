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

let coord: [number, string];                // tuple: array with set number
                                            //  of elements
coord = [0, '0'];

let mixedTypes: [number, string, boolean];  // mixed type tuple
mixedTypes = [...coord, true];

console.log(mixedTypes);

/**
 * Exercise 3 - any, void, null and undefined
 */

let justLikeJS: any;                        // how to defeat the purpose of TS
justLikeJS = 2;                             // usecase: prototyping?
justLikeJS = 'two';

// void type
function printToTheConsole(): void {
    console.log('some text');
}

let test: void;                             // makes sense for functions
test = undefined;                           // not so much for variables

let age = null;
let personData = {
    name: 'Tim',
    age,
}

let personAge: number | null;
personAge = personData.age;
console.log(personAge);