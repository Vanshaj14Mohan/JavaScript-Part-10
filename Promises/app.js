// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()* 10) + 1;
//     if(internetSpeed > 5){
//         // console.log("Your data was saved:", data);
//         // console.log("Internet Speed is", internetSpeed);
//         success();
//     }
//     else{
//         // console.log("Weak Connection, can't save data");
//         // console.log("Internet Speed is", internetSpeed);
//         failure();
//     }
// }

// savetoDb("Weather",()=>{ //Callback hell started, nesting of callbacks in different stages.
//     console.log("Success: Your data was saved:");
//     savetoDb("Project", ()=>{ //Stage 1
//         console.log("Data 2 project saved");
//         savetoDb("Project2", ()=>{ //Stage 2 
//             console.log("Data 3 project saved");
//         }, ()=>{
//             console.log("Data 3 project failed");
//         });
//     }, ()=>{ //Stage failed
//         console.log("Data 2 project failed");
//     });
// }, ()=>{
//     console.log("Failure: Weak Connection, can't save data");
// });

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

//Using Then and Catch method
// let request = savetoDb("Hilly Areas") //here request = Promise Object. 
// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// });
// console.log(request);
   
//More compact version
savetoDb("Hilly Areas") //here request = Promise Object. 
.then(()=>{
    console.log("Promise was resolved"); 
})
.catch(()=>{
    console.log("Promise was rejected");
}); 
