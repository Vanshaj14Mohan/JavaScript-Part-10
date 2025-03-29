//In this we will apply promises to our Callback Hell code

h2 = document.querySelector("h2");

function changeColor(color, delay){ //nextColChange is basically a callback here.
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            h2.style.color = color;
            resolve("Color Changed");
        }, delay);
    });
}

// changeColor("red", 1000, ()=> { //adding nested callbacks 
//     changeColor("purple", 1000, ()=>{
//         changeColor("blue", 1000, ()=>{
//             changeColor("green", 1000, ()=>{
//                 changeColor("orange", 1000);
//             });
//         });
//     });
// });

//Now converting Callback Hell to Promises
//Not using catch here because color is something which will definitely change, so no need to handle error here.

changeColor("Red", 1000)
.then(()=>{
    console.log("Red color done");
    return changeColor("Purple", 1000); //returning a promise object
})
.then(()=>{
    console.log("Purple color done");
    return changeColor("Blue", 1000);
})
.then(()=>{
    console.log("Blue color done");
    return changeColor("Green", 1000);
})
.then(()=>{
    console.log("Green color done");
    return changeColor("Orange", 1000);
})
.then(()=>{
    console.log("Orange color done");
})