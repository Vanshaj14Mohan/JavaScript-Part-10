//Promise Chaining is basically chaining promises one after another. Basically when we use a lot of then in codes

//Using Promises Here
function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()* 10) + 1;
        if(internetSpeed > 4){
            resolve("success: data was saved"); //this is our result here
        }
        else{
            reject("Error: Weak Connection"); //this is our error here
        }
    });
}

//More compact version
// savetoDb("Hilly Areas") //here request = Promise Object. 
// .then(()=>{
//     console.log("Data 1 was saved"); 
//     savetoDb("Hilly Lands")
//     .then(()=>{
//         console.log("Data 2 was saved");
//     });
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// }); 


//We can write this code in a much better way, By using Promise Chaining
savetoDb("Hilly Areas") 
.then((result)=>{
    console.log("Data 1 was saved");// save first one and then return second promise and then follow same for third one.
    console.log("Result of Promise", result);
    return savetoDb("Hilly Lands")
})
.then((result)=>{
    console.log("Data 2 was saved");
    console.log("Result of Promise", result);
    return savetoDb("Hilly Lakes");
})
.then((result)=>{
    console.log("Data 3 was saved");
    console.log("Result of Promise", result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error of Promise",error);
}); 
//SO we can say three promises are chained here.