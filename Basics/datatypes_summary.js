/* Two types:
-> Primitive:
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt

-> Non-Primitive / Reference:
1. Array
2. Objects
3. Functions

// JS is a dynamic typed language.
*/
//In symbol, it basically assigns a symbol to any variable, and identifies it uniquely.
/// For ex:
const id1=Symbol('123')
const id2=Symbol('123')
console.log(id1===id2); // Returns false

// Brief exs of Non-primitive
// Arrays:
const heroes = ["A","B","C"]
//Objects:
let myObj=
{
    name: "Sagar",
    age:20,
}

//function:
const myFunction=function()
{
    console.log("Hello world");
}

// To identify type of data: Use typeof
