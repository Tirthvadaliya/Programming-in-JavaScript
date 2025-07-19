// for each function in array
let array = [1, 2, 3, 4, 5];


console.log("Using forEach function :");
// for each function in array with normal function
array.forEach(function printvalue(value) {
  console.log(value);
});// Output: 1 2 3 4 5

console.log(" ");
console.log("Using arrow function :");
// for each function in array with arrow function
array.forEach((value) => {
  console.log(value);
});// Output: 1 2 3 4 5
console.log(" ");

let city= ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];

city.forEach((cityName) => {
    console.log(cityName);
});// Output: Delhi Mumbai Bangalore Chennai Kolkata
console.log(" ");


