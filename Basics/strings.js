const name = "Sagar"
const repocount = 50

// console.log(name+repocount+"Value"); //Sagar50Value-> This method is outdated
console.log(`My name is ${name} and my repocount is ${repocount} `)

const gamename = new String("Sagar-S") // Stores in key-value pairs
console.log(gamename[0]); //S
console.log(gamename.__proto__); //{}- Associated object
console.log(gamename.length); //5
console.log(gamename.toUpperCase()); //SAGAR
console.log(gamename.charAt(2)); //g
console.log(gamename.indexOf('g')); //2

const newstring = gamename.substring(0,6)
console.log(newstring); // Sagar-

const anotherString = gamename.slice(-2);
console.log(anotherString); // -S

/*
JavaScript substring() different results of substring()

If start > stop, then the function swaps both arguments.
If any argument is negative or is NaN, it is treated as 0.
JavaScript slice() different results of slice()

If start > stop, This function will return an empty string. (“”)
If the start is negative, It sets char from the end of the string, like substr().
If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)
*/
const s1 = "  Sagar   "
console.log(s1.trim()); // Sagar

const url = "https://google123.com"
console.log(url.replace('123','')); // Removes 123, make google website accesible
console.log(url.includes('google')); // true

console.log(gamename.split('-')); // Sagar, S
console.log(gamename.bold()) // <b>Sagar-S</b>


