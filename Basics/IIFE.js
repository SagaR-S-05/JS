/*
    IIFE(Immediately Invoked Function Expressions):
    - To invoke the function immediately after declaration.
    - To remove problems caused by global scope pollution i.e., 
    IIFE creates its own function scope, so variables inside it don’t leak into the global scope.
    Syntax:
    (Write your functions here)() -> Here () in the end is your exeution
*/
(function addone(n1) // Named IFFY
{
    console.log(n1+1);
})(10);

// For multiple functions. IIFE doesn't know when to end. So we end the previous function with semicolon.
(() => { // Unnamed IFFY
    console.log(1+2);
})()