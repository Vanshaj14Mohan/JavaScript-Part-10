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