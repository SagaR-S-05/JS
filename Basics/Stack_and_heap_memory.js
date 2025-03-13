/* Two types of memory:
-> Stack(Primitive data types)
-> Heap (Non-Primitive data types)
*/
let myYTname = "xyzdotcom"
 let anothername=myYTname
 anothername="abc"

console.log(myYTname); // O/P: xyzdotcom
console.log(anothername); // O/P: abc // Makes copies. (Stack)

let userone=
{
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo=userone
usertwo.email="def@google.com"
console.log(userone.email);
console.log(usertwo.email); // Both will have "def@google.com"(Heap)

