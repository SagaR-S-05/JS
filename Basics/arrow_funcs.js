/*  
    // this -> Talks about current context
    const userdetails =
    {
        name:"XYZ",
        id:1,

        welcome: function()
        {
            console.log(`${this.name}, welcome!`); // XYZ will be printed
            console.log(this); // { name: 'XYZ', id: 1, welcome: [Function: welcome] }
        }
    }
    userdetails.welcome();
    // // But if the value is changed:
    // userdetails.name="ABC"
    // userdetails.welcome() // Now the current context changes to ABC
    console.log(this); // {} -> Because we're in a node envionment, and there is no current context here to refer.
    // If executed in browser, window is the global object
*/

/*
    // Consider:
    function example() {
        let name  = "XYZ"
        console.log(this.name);
    }
    example() // Prints undefined as this only works in objects or class methods.

    // Same result when functions are declared the other way too:
    const example2 = function ()
    {
        let name = "ABC"
        console.log(this.name);
        console.log(this) // also prints {}
    }
    example2()

*/

/*
    // Arrow function:
    Syntax: 
    type name = (arguments if any) =>
    {

    }
    
    // Example:
    const arrowfn =  () =>
    {
        let name = "XYZ"
        console.log(this.name); // Same behaviour, undefined
        console.log(this); // {}
    }
    arrowfn()
*/

/*
    // Arrow functions can be declared in two ways: 
    // 1. Explicit return : Here {} is used, so return statement is a must
    const ex1 = (n1,n2) =>
    {
        return n1+n2
    }
    console.log(ex1(5,7))

    // 2. Implicit return : No need of {} and no need of return statement
    const ex2 = (n1,n2) => (n1+n2)

    console.log(ex2(5,7))

    For returning an object:
    const returnobj = () => ({name:"XYZ"})
*/

