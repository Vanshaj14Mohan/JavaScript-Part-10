//Promise Chaining is basically chaining promises one after another. Basically when we use a lot of then in codes

//Using Promises Here
function savetoDb(data){
    // let internetSpeed = Math.floor(Math.random()* 10) + 1;
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
savetoDb("Hilly Areas") //here request = Promise Object. 
.then(()=>{
    console.log("Data 1 was saved, Promise was resolved"); 
    savetoDb("Hilly Lands")
    .then(()=>{
        console.log("Data 2 was saved");
    });
})
.catch(()=>{
    console.log("Promise was rejected");
}); 
