
/*
    function myname ()
    {
        console.log("Hey, my name is XYZ!");
    }

    myname(); // Execution
    myname; // Reference - No output.
*/

/*
    function addtwonos(n1,n2)
    {
        console.log(n1+n2);
    }
    addtwonos(1,2) // 3
    // But if a new variable is created to store the answer and then printed:
    const res = addtwonos(1,2)
    console.log(res);// We'll get undefined

    // In order to correct it: We use return. Any statements after return are not considered.
    function addtwonos(n1,n2)
    {
        let res = n1+n2
        return res;
        console.log("Hi!"); // Will not be printed
    }
    const result = addtwonos(3,4)
    console.log(result); // 7
*/

/*
    function userlog(name)
    {
        return `${name} just logged in`
    }
    userlog("XYZ") // Return nothing
    console.log(userlog("XYZ")); // XYZ just logged in
    console.log(userlog("")); // just logged in
    console.log(userlog()) // undefined just logged in
*/

/*
    // Business example : 
    // Shopping cart price -> We know that there's no fixed input for a shopping cart, it always multiplies. 
    // For that, we use REST(Same as spread, but is called REST in this context)
    function calculatecartprice(...n1)
    {
        return n1
    }
    console.log(calculatecartprice(100,200,300)); // We get an array of all the values: [100,200,300]

    // If the there were various arguments, and then once REST argument like:
    function anotherex(n1,n2,...n3)
    {
        return n3
    }
    console.log(anotherex(100,200,300)); // Return 300 only as 100->n1 , 200->n2
*/

/*
    const obj =
    {
        name : "XYZ",
        id : 1
    }
    // Passing an object to function
    function passobject(anyobj)
    {
        console.log(`Name is : ${anyobj.name} and id is : ${anyobj.id}`);
    }
    passobject(obj) // Name is : XYZ and id is : 1
    // Or we can pass an entire object:
    passobject(obj2 =
        {
            name : "ABC",
            id : 2
        }
    ) // Name is : ABC and id is : 2

    // Holds good for arrays as well.
*/