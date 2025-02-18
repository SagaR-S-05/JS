let score = "33"
console.log(typeof score) // Returns string

/*
Here for type conversion, we just use the datatype name, with first letter being capitalized.
For ex: Number, String etc.
*/
let score_in_num = Number(score)
console.log(typeof score_in_num); // or console.log(typeof(score_in_num));
// Will return number now. Be careful in type conversion wrt to cases. 

let score2 = "33abc"
let score2_num = Number(score2)
console.log(score2_num); // Returns NaN, although it is typecasted as number, but score2 is a string having both alphabets and number. So, it won't be able to convert it into number. 
console.log(typeof score2_num); // But here, the type will be returned as number it self.

/*
If we use the others:
- null - Number(null) will return type as number, and the value will be 0.
- undefined - Number(undefined) will return type as number, but the value will be NaN.
- boolean - Number(boolean) will return type as number , but the value can be either 0 or 1.
- Number("some_string") will return type as number , but the value will be NaN.
For boolean typecasting: Boolean(arguments):
1 or "anyvalue" -> true
0 or "" -> false
*/
