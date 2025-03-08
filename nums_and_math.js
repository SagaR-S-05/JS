// Numbers
score=300
console.log(score); //300
console.log(typeof score); //number

anotherscore = new Number(100)
console.log(anotherscore); // [Number: 100] ->Basically, it returns as a string
console.log(typeof anotherscore); // object

// In number object, there are several operations/functions
console.log(anotherscore.toString()); //100 -> As string
console.log(anotherscore.toString().length); //3
console.log(anotherscore.toFixed(2)); // 100.00

const anothernumber = 123.4567
console.log(anothernumber.toPrecision(4)); // Basically rounding off prescision. Here the O/P will be 123.5 if toPrecision(3)->123

const largenum = 1000000
// In american standard, the largenum will be 1,000,000
console.log(largenum.toLocaleString());

// In indian standard, the large num will be 10,00,000
console.log(largenum.toLocaleString('en-IN'));


// Math
console.log(Math);
/* Lots of fucntions/operations present, gets displayed when executed in browser's console.
E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
and many more, exampless are coded below: 
*/
console.log(Math.abs(-4)); //4
console.log(Math.round(4.56)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.56)); //4
console.log(Math.min(4,3,6)); //3
console.log(Math.max(4,3,6)); //6

console.log(Math.random()); //0.11370619282272809 -> random value always will be between 0 and 1
// But we will need exact values
console.log(Math.floor((Math.random()+1))); // 1.1610265688195058 -> Because we don't need to have a random number from 0, so we encapsulate it with Math.floor() and add 1

// But the same thing might come again for below:
const min = 10
const max = 20
console.log((Math.random())*(max-min)); //0.12581156505892865
// To fix, we add math.floor, add 1 to difference of max and min and add min at last
console.log(Math.floor((Math.random())*(max-min+1)+min)); // Can be any random, with 10 and 20, like 12,16...








