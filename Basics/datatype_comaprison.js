// console.log(2>1);
// console.log(2<1);
//And similar ones like >=,<=,!=0,==

console.log("2">1);
console.log("02">1);
// Both return true,because JS has automatically converted string to number

console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0); // true
// Now here, comparison operators convert null to number, so null->0.
// Therefore we see, in 1st and 3rd statement, it is considered 0.
// Whereas it's not the same in 2nd statement.(Equality operator)

// Strict check: "==="
console.log("2"===2); // Returns false. Checks whether the comparison is valid or not, being the operands belong to same datatype.




