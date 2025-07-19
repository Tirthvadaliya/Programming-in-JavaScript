// ForEach loop in array
// The forEach() method executes a provided function once for each array element.
// It is a method of the Array object in JavaScript.
// Syntax: array.forEach(function(currentValue, index, arr), thisValue)

// Also called as "Higher Order Function (HOF)" or "Higher Order Method (HOM)" because it takes a function as an argument.

// for each method change the original array, it does not return a new array.



let array = [1, 2, 3, 4, 5];


// for each function in array with normal function
console.log("Using forEach function :");
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



console.log("Using forEach function with index :");
array.forEach((value)=>
{
  console.log(value**2);//value*value (value^2)  // Output: 1 4 9 16 25
});
console.log(" ");



console.log("Using forEach function with index and array :");
// for each function in array with arrow function and index
let calculatesquare=(value) =>
{
  console.log(value**2);//value*value (value^2)  // Output: 1 4 9 16 25
};
array.forEach(calculatesquare);// Output: 1 4 9 16 25
console.log(" ");




let city= ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];


console.log("Using forEach function with index and array :");
// for each function in array with arrow function and index
city.forEach((cityName) => { //forEach(val(cityName),index,array) 
    console.log(cityName.toUpperCase());//(val('cityName.toUpperCase()'),index,array)
});// Output: DELHI MUMBAI BANGALORE CHENNAI KOLKATA
console.log(" ");


