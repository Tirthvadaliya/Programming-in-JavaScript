console.log('//This is a single line comment in JavaScript');
console.log('/* This is a multi-line comment in JavaScript */');

/*1. Variable names can start with a letter, underscore (_), or dollar sign ($).
  2. Variable names can contain letters, numbers, underscores, and dollar signs.
  3. Variable names are case-sensitive (e.g., `name` and `Name` are different).
  4. Variable names cannot start with a number.
  5. Variable names cannot contain spaces or special characters (except for _ and $).
  6. Reserved keywords (like `var`, `let`, `const`, `function`, etc.) cannot be used as variable names.*/


  
_name="tonny stark";
_Name="tonny stark";
$name="tonny stark";
$Name="tonny stark";
// 1Name="tonny stark";   // invalid declaration
$1name="tonny stark"; // valid declaration

console.log(_name);
console.log(_Name);
console.log($name);
console.log($Name);
// console.log($1name); // invalid declaration
console.log($1name);

console.log('Sum of two numbers');
a=5;
b=5;
sum=a+b;
console.log(sum);


console.log('demonstrating variable types in JavaScript');
// javaScript is dynamically typed, meaning you don't need to declare the type of a variable when you create it.
// You can change the type of a variable at any time.


x = 10; // x is a number
console.log(x);


// Later, you can change the type of x to a string
x = "Hello"; // now x is a string
console.log(x);
// You can also use the `typeof` operator to check the type of a variable       
console.log(typeof x); // Output: string




y=10.5;
console.log(y); // Output: 10.5
// JavaScript supports both single and double quotes for strings
console.log("Hello, World!"); // Using double quotes    
console.log('Hello, World!'); // Using single quotes

str="tonny stark";
console.log(str); // Output: tonny stark

bool=true;
console.log(bool); // Output: true

c=null;
console.log(c); // Output: null
// Undefined variable
d=undefined;
console.log(d); // Output: undefined

// objects in JavaScript
// Objects are collections of key-value pairs
const obj = {
    name: "Tony Stark",
    age: 45,
    isAvenger: true
};

obj['city'] = 'New York'; // Adding a new property to the object
obj["age"] = 46; // Modifying an existing property
console.log(obj); // Output: { name: 'Tony Stark', age: 46, isAvenger: true, city: 'New York' }
// Accessing object properties
console.log(obj.name); // Output: Tony Stark
console.log(obj['age']); // Output: 45

console.log("variable scope in JavaScript");
// variable scope
var globalVar = "I am a global variable"; // Global variable
let localVar = "I am a local variable"; // Local variable
const constantVar = "I am a constant variable"; // Constant variable

console.log(globalVar); // Output: I am a global variable
console.log(localVar); // Output: I am a local variable
console.log(constantVar); // Output: I am a constant variable


