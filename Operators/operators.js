//operators in javascript
console.log("Operators in JavaScript");
// This code demonstrates various operators in JavaScript including arithmetic, assignment, comparison, logical, bitwise, ternary, typeof, instanceof, and comma operators.


console.log(" ");

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operations:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);// a raised to the power of b
console.log("Pre Increment:", ++a);
console.log("Post Increment:", a++); // a is now 11
console.log("Post Increment:", a); // a is now 12   
console.log("Pre Decrement:", --b);
console.log("Post Decrement:", b--); // b is now 4
console.log("Post Decrement:", b); // b is now 3




console.log(" ");
// Assignment Operators
let x = 10;
let y = 5;
console.log("\nAssignment Operations:");

x += y; // x = x + y
console.log("x += y:", x);
x -= y; // x = x - y
console.log("x -= y:", x);
x *= y; // x = x * y
console.log("x *= y:", x);
x /= y; // x = x / y
console.log("x /= y:", x);
x %= y; // x = x % y    
console.log("x %= y:", x);
x **= y; // x = x ** y
console.log("x **= y:", x);



console.log(" ");
// Comparison Operators
// a = 10;
// b = 5;
console.log("\nComparison Operations:");
console.log("Equal:", a == b);  // true if a is equal to b
console.log("Not Equal:", a != b);// true if a is not equal to b
console.log("Strict Equal:", a === b);// true if a is equal to b and both are of the same type
console.log("Strict Not Equal:", a !== b);// true if a is not equal to b or they are of different types
console.log("Greater Than:", a > b);
console.log("Less Than:", a < b);
console.log("Greater Than or Equal:", a >= b);
console.log("Less Than or Equal:", a <= b);


console.log(" ");
// Logical Operators
console.log("\nLogical Operations:");
let c = true;
let d = false;
console.log("AND:", c && d); // true if both are true
console.log("OR:", c || d); // true if at least one is true
console.log("NOT:", !c); // true if c is false  



console.log(" ");
// Bitwise Operators
console.log("\nBitwise Operations:");
let e = 5; // 0101 in binary
let f = 3; // 0011 in binary        
console.log("Bitwise AND:", e & f); // 0001 in binary (1 in decimal)
console.log("Bitwise OR:", e | f); // 0111 in binary (7 in decimal)
console.log("Bitwise XOR:", e ^ f); // 0110 in binary (6 in decimal)
console.log("Bitwise NOT:", ~e); // Inverts bits (in this case, -6 in decimal)
console.log("Left Shift:", e << 1); // 1010 in binary (10 in decimal)
console.log("Right Shift:", e >> 1); // 0010 in binary (2 in decimal)


console.log(" ");
// Ternary Operator
console.log("\nTernary Operation:");
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);



console.log(" ");
// Typeof Operator
console.log("\nTypeof Operation:");
console.log("Type of a:", typeof a); // "number"
console.log("Type of c:", typeof c); // "boolean"



console.log(" ");
// Instanceof Operator
console.log("\nInstanceof Operation:");
console.log("Is a number instance of Number?", a instanceof Number); // false, because a is a primitive number
console.log("Is c instance of Boolean?", c instanceof Boolean); // false, because c is a primitive boolean
console.log("Is 'Hello' instance of String?", "Hello" instanceof String); // false, because 'Hello' is a primitive string
console.log("Is new String('Hello') instance of String?", new String("Hello") instanceof String); // true, because it's an object



console.log(" ");
// Comma Operator
console.log("\nComma Operation:");  
let result = (x = 10, y = 20, x + y);
console.log("Result of Comma Operator:", result); // 30, evaluates to the last expression

