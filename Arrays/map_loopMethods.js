// Map loop in array
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It is a method of the Array object in JavaScript.
// Syntax: array.map(function(currentValue, index, arr), thisValue)

let arr = [1, 2, 3, 4, 5];

let newarr = arr.map((val) =>
{
    return val ** 2; // Squaring each element
});
console.log("Original Array :",arr); // Output: [1, 2, 3, 4, 5] - Original array remains unchanged
console.log("New Array :",newarr); // Output: [1, 4, 9, 16, 25]

console.log(" ");
// The map() method does not execute the function for empty elements.
let arr2 = [1, 2, , 4, 5]; // Note the empty element
let newarr2 = arr2.map((val) =>
{
    return val ** 2; // Squaring each element
});
console.log("Original Array with empty element :",arr2); // Output: [1, 2, , 4, 5]
console.log("New Array with empty element :",newarr2); // Output: [1, 4, 16, 25] 
// The empty element is skipped

// The map() method does not change the original array, it returns a new array.
// If you want to change the original array, you can use the forEach() method instead
