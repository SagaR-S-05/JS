
// Object literals
/*
    const mysym = Symbol()
    const JSuser = {
        name : "Sagar",
        age: 21,
        [mysym]:"key1",
        location: "Mysuru",
        email: "xyz@gmail.com",
        isLoggedin : true,
        lastlogin: ["Monday","Tuesday"]
    }
*/

/*
    // Ways of accessing objects:
    //1. Dot:
    console.log(JSuser.name); // Sagar
    //2. Using []
    console.log(JSuser["name"]); // ["name"] should be given because it is treated as a string, although we don't define as such while object creation.
    console.log(JSuser[mysym]); // Syntax to access Symbol datatypes in the objects
    console.log(typeof(JSuser[mysym])); // Gives as string as symbol is given a string value

    // Value changing & Object freezing:
    JSuser.email = "xyz@google.com" // Old email is replaced with this.
    Object.freeze(JSuser)
    JSuser.email="xyz@microsoft.com" // Won't get changed.
    console.log(JSuser);
    // -> {
    //   name: 'Sagar',
    //   age: 21,
    //   location: 'Mysuru',
    //   email: 'xyz@google.com',
    //   isLoggedin: true,
    //   lastlogin: [ 'Monday', 'Tuesday' ],
    //   [Symbol()]: 'key1' //-> Notice here, it's a Symbol(). If [mysym] was just declared as mysum, it would have given as a string.-> mysym: 'key1'
    // }
*/

/*
    // Function creation in the object:
    JSuser.greetings = function()
    {
        console.log("Hello!");   
    }

    JSuser.greetings2 = function()
    {
        console.log(`Welcome ${this.name}!`);
        // Here in order to access "name" attribute, we use -> ` `
        // Along with that ${this.attribute_name}
        
    }

    // console.log(JSuser.greetings); // [Function (anonymous)] -> Function not executed, we just got the reference
    console.log(JSuser.greetings()); // Hello!
    console.log(JSuser.greetings2());
*/


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/*
    // Singleton -  Formed when objects are declared using constructors. Not when declared using literals.
    const User = new Object(); // Singleton object
    const User2 = {
        name: "ABC",
        id: 345,
        fullname:{ // Nested objects
            userfullname:{
                firstname: "UVW",
                lastname:"BEC"
            }
        }
    } // Non-Singleton Object
    User.name = "XYZ"
    User.id = "123"
    User.isloggedin = false

    console.log(User); // { name: 'XYZ', id: '123', isloggedin: false }
    console.log(User2); // {name: 'ABC',id: 345,fullname: { userfullname: { firstname: 'UVW', lastname: 'BEC' } }}
    console.log(User2.fullname); // { userfullname: { firstname: 'UVW', lastname: 'BEC' } }
    console.log(User2.fullname.userfullname); // { firstname: 'UVW', lastname: 'BEC' }
    console.log(User2.fullname.userfullname.firstname); // UVW
*/

/*
    // Assigning:
    const obj1 = {a:1,b:2}
    const obj2 = {c:3,d:4}
    // const obj3 = {obj1,obj2} 
    // console.log(obj3);// { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
    // We need a new merged object. So we use assign().
    // assign() syntax: Object.assign(target,source)
    // Good practice is considering target as an empty object {}, followed by any object you want to assign.
    const obj3 = Object.assign({},obj1,obj2)
    console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
    // Or simply use spread - Almost used everytime
    const obj4 = {...obj1,...obj2}
    console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 }
*/

/*
    const User = new Object();
    User.name = "XYZ"
    User.id = "123"
    User.isloggedin = false
    console.log(User);
    // To get only keys & values of the User object:
    console.log(Object.keys(User)); // -> [ 'name', 'id', 'isloggedin' ]:  Gives array of keys, can be used for looping it in multiple applications.
    console.log(Object.values(User)); // [ 'XYZ', '123', false ]
    console.log(Object.entries(User)); // [ [ 'name', 'XYZ' ], [ 'id', '123' ], [ 'isloggedin', false ] ] : Array of arrays, each key value pairs are seperated.

    console.log(User.hasOwnProperty('isloggedin')); // true
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

/*
    // Destructuring: Instead of using dot operator to access object's attributes, we destructure(rename) it.
    const course = {
        name:"XYZ",
        price:999,
        courseInstructor:"ABC"
    }
    // Instead of course.courseInstructor we:
    const {courseInstructor : teacher} = course;
    console.log(teacher); // ABC

    // Used in React much more often.
*/
