// Loops in JavaScript
console.log(" ");
console.log("1. For Loop ");
// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}



console.log(" ");
console.log(" 2. While Loop");
// 2. While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration:", j);
    j++;
}



console.log(" ");
console.log("3. Do-While Loop");
// 3. Do-While Loop
let k = 0;
do {
    console.log("Do-While Loop iteration:", k);
    k++;
} while (k < 5);



console.log(" ");
console.log(" 4. For...of Loop");
// 4. For...of Loop
let str="Hello World";
for(let i of str) {
    console.log("i=", i);
}
console.log(" ");
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log("For...of Loop value:", value);
}



console.log(" ");
console.log(" 5. For...in Loop");
// 5. For...in Loop
const person = { name: "Alice", age: 30, city: "New York" };
for (const key in person) {
    console.log("For...in Loop key:", key, "    value:", person[key]);
}

console.log(" ");
console.log(" ");

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log("For...in Loop key:", key, "value:", object[key]);
}



console.log(" ");
console.log(" 6. Nested Loops");
// 6. Nested Loops
for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 2; n++) {
        console.log("Nested Loop m:", m, "n:", n);
    }
}