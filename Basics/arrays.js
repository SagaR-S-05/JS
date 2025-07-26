/*
    Can be declared in 3 ways:
    const myArr = [0,1,2,3,4,5] // Can store multiple datatypes too.
    const myArr2= new Array("a",'b')
    // const myArr3 = ["XYZ","ABC"]
    for(let i=0;i<myArr.length;i++)
    {
    console.log(" ",myArr[i]);
    }
    console.log(myArr); // 0,1,2,3,4,5
    myArr.push(6);
    console.log(myArr); // 0,1,2,3,4,5
    myArr.pop(),6
    console.log(myArr); // 0,1,2,3,4,5

    myArr.unshift(6);
    console.log(myArr); // 6,0,1,2,3,4,5
    myArr.shift()
    console.log(myArr); // 0,1,2,3,4,5

    console.log(myArr.includes(9)); // false
    console.log(myArr.indexOf(5)); // If present, gives the index(Here->5), else -1

    const newArr = myArr.join();
    myArr is an array -> [0,1,2,3,4,5]
    Whereas through join(), it compiles myArr elements as a string of comma-seperated elements:
    console.log(newArr); // 0,1,2,3,4,5
    console.log(typeof(newArr)); // string

    Slice and Splice
    const newarr = [2,4,6,8];
    console.log("Before slice ",newarr);

    newarr_sliced=newarr.slice(1,3);
    console.log("Slice O/P: ", newarr_sliced); // [4,6] Returns elements from index 1 to 2, leaves out 3
    console.log("After slice ", newarr); // newarr remains same -> [2,4,6,8]

    newarr_spliced = newarr.splice(1,3);
    console.log("Splice O/P: ", newarr_spliced); // [4,6,8] Returns elements from index 1 to 3
    console.log("After splice ", newarr); // newarr - spliced elements -> [2]
*/

/* Difference:
- Index consideration:
  -> Slice: Selects elements from starting point to end point - 1(Excludes end index)
  -> Splice: Considers last index too
- Array changes:
 -> Slice: No change in array
 -> Splice: Original array -= Spliced elements 
 */

 /*
    Difference between push() and concat()
    const marvel = ["Captain America","Ironman","Hulk"]
    const dc = ["Batman","Superman","Aquaman"]

    marvel.push(dc)
    console.log(marvel); // Treats dc array as one whole element, and modifies existing array
    console.log(marvel[3]); // [ 'Batman', 'Superman', 'Aquaman' ]

    const allheros = marvel.concat(dc) // This creates a new array
    console.log(allheros); // ['Captain America','Ironman','Hulk','Batman','Superman','Aquaman']

    Instead of using concat, we use spread
    const allheros = [...marvel,...dc] // ... says to treat all elements individually
    console.log(allheros); // ['Captain America','Ironman','Hulk','Batman','Superman','Aquaman']
*/

/*
    const mixed_arrays = [0,1,2,[3,4,5],6,7,[8,9,[10]]];
    // To combine all subarrays as one:
    const fixed_mixed_arrays = mixed_arrays.flat(2) // 2-> Depth, i.e., how much sub-array ke andar sub-array you want to handle.
    // If set to infinity, it'll handle all cases
    console.log(fixed_mixed_arrays);
*/

/*
    console.log(Array.isArray("XYZ")); // false
    console.log(Array.from("XYZ")); // ['X','Y','Z'] -> from() creates array from a given parameter passed
    console.log(Array.from({name:"XYZ"})); // IMPORTANT: Returns an empty object : []
    // Because we have not specified whether the array should contain keys or values.
*/


/*
    let score1=100;
    let score2=200;
    let score3=300;
    const_score_arr= Array.of(score1,score2,score3); // Creates array of any existing values, variables etc.
    console.log(const_score_arr); // [100,200,300]
*/



