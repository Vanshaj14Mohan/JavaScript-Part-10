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