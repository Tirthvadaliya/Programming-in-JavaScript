//functions without parameters and return values
function greet() {
    console.log("Hello, World!");
}
greet();
console.log(" ");


//functions with parameters and return values
function add(a, b) {
    return a + b;
}
let val=add(2, 3);
console.log("add", val);

console.log(" ");

function subtract(a, b) {
    console.log("subtract", a - b);
}
subtract(5, 2);

console.log(" ");
console.log(" ");
console.log(" ");

console.log("function with arraow parameters");
//function with arraow parameters

const multiply = (a, b) => {
    return a * b;
}
let result = multiply(4, 5);
console.log(multiply);
console.log("multiply", result); 
console.log(" ");

let div = (a, b) => {
    return a / b;
}
// call it "div(10,5)" and check result in console
// after uncomment the next line
// div=5;
console.log(" ");

let msg=()=> console.log("This is a message from an arrow function"); // inline arrow function
msg();
console.log(" ");
let msg2=()=>
{ 
    console.log("This is a message2 from an arrow function");
}
msg2();
console.log(" ");
