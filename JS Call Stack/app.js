//Example of Call Stack, Making 2 functions and calling one of it inside another
function hello(){
    console.log("Inside, Hello Function");
    console.log("Hello");
}

function demo(){
    console.log("Calling Hello Function");
    hello();
}

console.log("Calling Demo Function");
demo();
console.log("Done, Bye");

console.log("Visualizing the call stack:")

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log("Final value after merging is:", ans);
}

three();