// reduce loopMethods

// The reduce method takes a callback function that is called for each element in the array.
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output= arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(output); // Output: 55

console.log("==========================================="); 
// Example of finding the largest number in an array using reduce
const largestnum= arr.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
});
console.log(largestnum); // Output: 10


