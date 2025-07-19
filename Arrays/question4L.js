let number= prompt("Enter the number :");
let arr = [];
for(let i=1; i<=number; i++){
    arr[i-1]=i; // "[i-1]" will give us the index of the array and "i" will give us the value of the array
    }
console.log(arr); // Output: [0, 1, 2, ..., number-1]

// Calculate the sum of the array
let sum=arr.reduce((result, currentValue) => {
    return result + currentValue;
});
console.log("Sum of the array is: " + sum); 
// Output: Sum of the array is: (number * (number - 1)) / 2


// Calculate the product of all numbers in the array
let product = arr.reduce((result, currentValue) => {
    return result * currentValue;
});
console.log("Product of the array is: " + product);