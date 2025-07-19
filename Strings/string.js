let string="hello world";
console.log(string);
console.log(string.length);
console.log(string[6]);// Accessing a character at a specific index
console.log(" ");

//template literals
let name = "Tony Stark";
let age = 30;
console.log("Using template literals:");
console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);

// Using template literals for multi-line strings
console.log(" ");
let multiLineString = `This is a string
that spans multiple lines.`;
console.log(multiLineString);
console.log(" ");
console.log(" ");

let obj=
{
    item: "Pen",
    price: 10,
};
let output = `The price of the ${obj.item} is ${obj.price} dollars.`;
console.log(output);

console.log(" ");

let specialstring = `This is template literal ${2+2+2}`;
console.log(specialstring);
console.log(" ");
console.log(" ");

console.log("String methods:");
console.log(" ");
// String methods
let str = "Hello, World!";
let str2 = "   Hello, World!   ";

console.log(str); //output Hello, World!
console.log(" ");

console.log("convert string to uppercase");
console.log(str.toUpperCase()); //output HELLO, WORLD!
console.log(" ");

console.log("convert string to lowercase");
console.log(str.toLowerCase()); //output hello, world!
console.log(" ");

console.log("length of string");
console.log(str.length); //output 13
console.log(" ");


console.log("finds the index of the first occurrence of (World)");
console.log(str.indexOf("World")); //output 7  
console.log(" ");

console.log("Accessing the first character");
console.log(str.charAt(0)); //output H  
console.log(" ");

console.log("string slice");
console.log(str.slice(0, 5)); //output Hello
console.log(" ");

console.log("splits the string into an array at the comma and space");
console.log(str.split(", ")); //output [ 'Hello', 'World!' ] 
console.log(" ");

console.log("replaces 'World' with 'JavaScript'");
console.log(str.replace("World", "JavaScript")); //output Hello, JavaScript!
console.log(" ");

console.log("trims whitespace from both ends of the string");
console.log(str2.trim()); //output Hello, World! (removes whitespace from both ends)
console.log(" ");

console.log("checks if the string includes 'World'");
console.log(str.includes("World")); //output true
console.log(" ");

console.log("checks if the string starts with 'Hello'");
console.log(str.startsWith("Hello")); //output true
console.log(" ");

console.log("checks if the string ends with '!'");
console.log(str.endsWith("!")); //output true
console.log(" ");

console.log("repeats the string 2 times");
console.log(str.repeat(2)); //output Hello, World!Hello, World!
console.log(" ");

console.log("searches for 'World' and returns the index of the first match");
console.log(str.search("World")); //output 7
console.log(" ");

console.log("finds the last occurrence of 'o'");
console.log(str.lastIndexOf("o")); //output 8
console.log(" ");

console.log("String Concat");
let string1 = "Hello";
let string2 = "World";
let conc= string1.concat(string2);
console.log(conc); //output HelloWorld
console.log(" ");

