const accountID = 144553 // Cannot me modified. Remains fixed.
let accountEmail = "sagarsuma11@gmail.com"
var accountPassword = "Sagar1234"
accountCity  = "Mysuru"
let accountState;


console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log();




accountEmail = "sagarsuma112233@gmail.com"
accountPassword = "1234"
accountCity = "B'luru"

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity); Instead of using log statements multiple times, we use table.

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

/*
    Prefer not to use var because of issue in block scope and functional scope.
*/