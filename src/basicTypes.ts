/**
 * Exercise 1 - Basic Types
 * @author Spencer Pepe
 */


// Boolean
let hasSuperPowers: boolean;
hasSuperPowers = true;          
hasSuperPowers = Boolean(0);        // false
hasSuperPowers = !!'anything';      // true

console.log(`Has Super Powers: ${hasSuperPowers}`); // expect true


// Number
let heightInCM: number = 188;       // heightInCM = 188
heightInCM = Number(true);          // heightInCM = 1
heightInCM = Number('188');         // heightInCM = 188
heightInCM = +'188';                // heightInCM = 188

console.log(`Height in CM: ${heightInCM}`);


// String
let hero: string = "Batman";        // hero = "Batman"
hero = String(122);                 // hero = "122"
hero = String(true);                // hero = "true"
hero = (122).toString();            // hero = "122"
hero = "Batman";                    // hero = "Batman"
console.log(`Hero: ${hero}`);
