// Asynchronouse means excute code line by line but dont wait for the result,
// means if you call a function it will execute the next line of code without waiting for the function to finish

console.log("one");
console.log("two");

//method1

// function hello(){ // this function execute after the 4 second
//     console.log("hello");
// }
// setTimeout(hello,4000);

setTimeout(()=>
{
    console.log("hello");
},4000);

console.log("three");
console.log("four");
console.log("Five");