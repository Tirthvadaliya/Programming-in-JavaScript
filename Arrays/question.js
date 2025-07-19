// Aim :- Calculate the average of an array of marks

let marks = [85, 90, 78, 92, 88];

let sum = 0;
for (let value of marks) {
    sum += value;
}
let average = sum / marks.length;
// console.log("Average marks:", average);
console.log(`Average marks: ${average}`); // Using template literals for better readability
// Output: Average marks: 86.6