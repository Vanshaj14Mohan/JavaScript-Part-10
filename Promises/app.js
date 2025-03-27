function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()* 10) + 1;
    if(internetSpeed > 5){
        // console.log("Your data was saved:", data);
        // console.log("Internet Speed is", internetSpeed);
        success();
    }
    else{
        // console.log("Weak Connection, can't save data");
        // console.log("Internet Speed is", internetSpeed);
        failure();
    }
}

savetoDb("Weather",()=>{ //Callback hell started, nesting of callbacks in different stages.
    console.log("Success: Your data was saved:");
    savetoDb("Project", ()=>{ //Stage 1
        console.log("Data 2 project saved");
        savetoDb("Project2", ()=>{ //Stage 2 
            console.log("Data 3 project saved");
        }, ()=>{
            console.log("Data 3 project failed");
        });
    }, ()=>{ //Stage failed
        console.log("Data 2 project failed");
    });
}, ()=>{
    console.log("Failure: Weak Connection, can't save data");
});