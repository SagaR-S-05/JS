// Dates:
let myDate= new Date()
console.log(myDate); // 2025-03-13T20:40:13.586Z -> Complex to understand.
console.log(myDate.toString()); // Fri Mar 14 2025 02:11:09 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());// 2025-03-13T20:44:05.758Z
console.log(myDate.toJSON());// 2025-03-13T20:44:05.758Z
console.log(myDate.toDateString()); // Fri Mar 14 2025
console.log(myDate.toLocaleString()); // 3/14/2025, 2:14:05 AM
console.log(myDate.toLocaleDateString()); // 3/14/2025
console.log(myDate.toTimeString()); // 02:14:05 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); // Thu, 13 Mar 2025 20:44:05 GMT

console.log(typeof myDate); // object
let myCreateDate1 = new Date(2023,0,23) // In JS, mnths start from '0'.
console.log(myCreateDate1.toDateString()); // Mon Jan 23 2023

let myCreateDate2 = new Date(2023,0,23,5,3) // In JS, mnths start from '0'.
console.log(myCreateDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreateDate3 = new Date("01-23-2023") // To get MM-DD-YYYY format
console.log(myCreateDate3.toLocaleString()); // 1/23/2023, 12:00:00 AM

// Timestamps:
let myTimestamp = Date.now()
console.log(myCreateDate1.getTime()); // 1674412200000 ms

console.log(myTimestamp); // 1741899353543 ms
console.log(Math.floor(Date.now()/1000)); // 1741899406 s

let newDate = new Date()
console.log(newDate); // 2025-03-13T20:59:27.585Z
console.log(newDate.getMonth()+1); // 3
console.log(newDate.getFullYear()); // 2025
console.log(newDate.getDate()); // 14
console.log(newDate.getDay()); // 5
console.log(newDate.getTime()); // 1741899567585 ms

newDate.toLocaleString('default',  // Allows to customize parameters.
    {
        weekday: 'long'
    }