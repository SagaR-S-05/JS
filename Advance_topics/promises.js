const promise1 = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('First : Async task is complete');
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log("First : Promise consumed");
    
})

// Or

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Second : Task 2");
        resolve()
    },2000)    
}).then(()=>{console.log("Second : Task 2 resolved");})


// To grab data from a promise
promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            user: "XYZ",
            email:"xyz@example.com"
        })
    },3000)
})

promise3.then((user)=>{console.log("Third : Details : ",user);
})

promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=false;
        if(!err)
        {
            resolve({
                username: "ABC",
                email:"abc@example.com"
            })
        }
        else
        {
            reject('Error occured')
        }
    },4000)
})

// Chaining
promise4
.then(function(user){
    console.log("Fourth : Details : ",user,"Username is : ");
    return user.username // ABC
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err); // If err=true, then reject will be activated 
})
.finally(()=>{console.log(" Fourth : Either confirmed or rejected");
})

// Using async await
const Promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false // If this is the case, all details will be shown
        // In async, error handling can't be handled directly, so use try and catch block
        if(!err)
        {
            resolve({username:"DEF",email:"def@example.com"})
        }
        else
        {
            reject("Error!")
        }
    },5000)
})

async function consumepromise5(){
    const response=await Promise5
    console.log("Fifth : ",response);
    
}

consumepromise5()

const Promise6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true
        if(!err)
        {
            resolve({username:"DEF",email:"def@example.com"})
        }
        else
        {
            reject("Error!")
        }
    },6000)
})

    async function consumepromise6(){
        try {
            const response=await Promise6
            console.log(response);
        }  catch (err) {
    console.log("Sixth : ",err);  
    }
}
consumepromise6()

// Fetching from a url
async function getdetails(){
    setTimeout(async()=>{
        try {
            const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
            // console.log(response);
            const data = await response.json();
            console.log("Seventh : ",data);
        } catch (error) {
            console.log("Error : " ,error);
        }
    },7000)
}
getdetails()

// Instead of all this, just use then and catch
setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{console.log("Eigth : ",data);
    })
    .catch((err)=>{console.log("Error");
    })
},9000)