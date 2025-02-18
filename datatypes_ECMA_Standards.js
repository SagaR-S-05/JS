"use strict"; // Treat all JS code as newer version.

// alert(3+3) We are using nodejs , not browser. This will work: Browser->New tab->Inspect->Console->Type this->Alert message will come, showing the sum.

let name = "Sagar"
let age = 20
let isLoggedIn = true

/*
- number - 2^51
- string - ""
- bigint - Rarely used, for larger numbers
- boolean - true/false
- null - A standalone value
- undefined - No value is given to a variable. Not a null.
- symbol - for unique elements
- object
*/
console.log(typeof name); // o/p: string
console.log(typeof age); //o/p: number
console.log(typeof undefined); // returns undefined
console.log(typeof null);  //returns object


