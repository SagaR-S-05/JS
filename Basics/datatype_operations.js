let value = 3
let neg_value = -value
console.log(neg_value)

/*
Operations are:
-> +
-> -
-> /
-> *
-> **
-> %
*/
let str1="hello"
let str2=" sagar!"

console.log(str1+str2)

/* Here is the confusing part in concatenation:*/

console.log("1"+"2"); // Return 12
console.log("1"+2); //Returns 12 again
console.log(1+"2"); //12, again
console.log("1"+2+2) // Here, its 122
console.log(1+2+"2"); // But here, it return 32



// Special/Confusing conversions
console.log(+true); //Returns 1
console.log(+"") //Returns 0

