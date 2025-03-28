//Promise Chaining is basically chaining promises one after another. Basically when we use a lot of then in codes

//Using Promises Here
function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()* 10) + 1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        }
        else{
            reject("Error: Weak Connection");
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
.then(()=>{
    console.log("Data 1 was saved");// save first one and then return second promise and then follow same for third one.
    return savetoDb("Hilly Lands")
})
.then(()=>{
    console.log("Data 2 was saved");
    return savetoDb("Hilly Lakes");
})
.then(()=>{
    console.log("Data 3 was saved");
})
.catch(()=>{
    console.log("Promise was rejected");
}); 
//SO we can say three promises are chained here.