h2 = document.querySelector("h2");

function changeColor(color, delay, nextColChange){ //nextColChange is basically a callback here.
    setTimeout(() =>{
        h2.style.color = color;
        if (nextColChange) nextColChange();
    }, delay);
    h2.style.color = color;
}

//Rather than this we can make a function that takes the element as an argument
// setTimeout(() =>{
//     h2.style.color = "red";
// }, 1000);

// setTimeout(() =>{
//     h2.style.color = "yellow";
// }, 1000);

// setTimeout(() =>{
//     h2.style.color = "green";
// }, 2000);

//now using it 
// setTimeout(changeColor("red"), 1000);

// setTimeout(changeColor("yellow"), 2000);

// setTimeout(changeColor("green"), 3000);

//Generating 5 colors through nesting.
changeColor("red", 1000, ()=> { //adding nested callbacks 
    changeColor("purple", 1000, ()=>{
        changeColor("blue", 1000, ()=>{
            changeColor("green", 1000, ()=>{
                changeColor("orange", 1000);
            });
        });
    });
});
// changeColor("yellow", 2000);
// changeColor("green", 3000);