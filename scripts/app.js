function Hello() {
console.log("Hello there!");
}

let global = 0;
function init() 
{S
    Hello();
    let temp = 1;
    global = temp;
    console.log("hello we are talking about the DOM");
}

// variable scope
let i = 10;

for(let i = 0; i < 10; i++) {
    // empty variable 
}
window.onload = init;