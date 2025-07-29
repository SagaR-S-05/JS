/*
    if(true)
    {
        let a = 10
        const b =20
        var c = 30
    }
    // console.log(a); // Throws -> ReferenceError: a is not defined 
    // console.log(b); // ReferenceError: b is not defined
    console.log(c); // But this prints 30

    That is because:
    ✅ var is function-scoped
    It is not block-scoped (i.e., it does not care about { ... } blocks like if, for, etc.)

    If declared inside a block but not inside a function, it escapes the block and becomes accessible outside of it.

    ✅ let and const are block-scoped
    They are confined to the { ... } block in which they are declared.

    Cannot be accessed outside the block.


    ✅ Simple Analogy:
    Think of:

    let and const as "local variables to a room" — they cannot be seen outside the room (block).

    var as "a loud speaker" — even if declared inside the room, it broadcasts its presence to the whole house (function/global).

*/

/*
    // If
    let a=3000
    if(true)
    {
        let a = 10
        console.log(`Inside if, a is : ${a}`); // Inside if, a is : 10
        
    }
    console.log(a); // Gives 3000. Here 'a' is global-scoped
*/

// Globe Scope in IDE and in other websites are different

/*
    // Consider
    function one()
    {
        const name = "XYZ"
        function two()
        {
            const id = 1
            console.log(name);
        }
        // console.log(id); // ReferenceError: id is not defined, id scope is only within function two()
        // two() // XYZ
    }
    one() //If two() call is commented, no O/P

    // There are two ways of defining a function:

    console.log(addone(2)) // Here is the difference: Here, we'll get the output -> 3, even though function is called before declaration
    function addone(n)
    {
        return n+1
    }
    addone(1) // No output
    // And the second one is also doing the same, but this is called hoisting
    // The only difference here is you're assigning the function to a variable after declaration.

    addtwo(5) // But here, we'll get the error : ReferenceError: Cannot access 'addtwo' before initialization
    const addtwo = function(n)
    {
        return n+2
    }
    addtwo(1) // No output
*/

