// // array intro
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ["a", "b", "c", "d", "e"];
// let arr3 = ["a",1,"b",2,"c",3];

// console.log(arr1);
// console.log(arr2);  
// console.log(arr3);
// console.log(arr3[0]); // Accessing the first element
// console.log(arr3[3]); // Accessing the fourth element
// console.log(" ");


// let heroes=["spiderman","hulk","ironman","antman","blackPanther","thor"];
// for(let i=0; i<heroes.length; i++)
// {
//     console.log(heroes[i]);
// }
// console.log(" ");

// console.log("Using For Of");
// for(let hero of heroes)
// {
//     console.log(hero);
// }

// console.log(" ");

// Array Methods
let fruits = ["apple", "banana", "cherry", "date"];
console.log("Original array:", fruits);
console.log(" ");

// Adding an element to the end of the array
fruits.push("elderberry");
console.log("After push:", fruits);
console.log(" ");

// Removing the last element of the array
let del=fruits.pop();
console.log("After pop:", fruits);
console.log("Removed element:", del);
console.log(" ");

// convert array to string
let str = fruits.toString();
console.log("Array to string:", str);
console.log(" ");

//concate arrays
let vegetables = ["carrot", "broccoli"];
let allFood = fruits.concat(vegetables); // Concatenating arrays
console.log("Fruits array:", fruits);
console.log("Vegetables array:", vegetables);
console.log("Concatenated array:", allFood);
console.log(" ");

//add element at the beginning of the array
console.log(fruits);
fruits.unshift("fig");
console.log("After unshift:", fruits);  
console.log(" ");

//remove first element of the array
console.log(fruits);
let removedElement = fruits.shift();
console.log("After shift:", fruits);
console.log("Removed element:", removedElement);
console.log(" ");

// slice method
let slicedFruits = fruits.slice(1, 3); // Slicing from index 1 to 3 (exclusive)
console.log("Original array:", fruits);
console.log("Sliced array:", slicedFruits);
console.log(" ");

// splice method
console.log("Original array:", fruits);
let splicedFruits = fruits.splice(1, 2, "grape", "kiwi"); // Splicing from index 1, removing 2 elements, and adding "grape" and "kiwi"
console.log("Spliced array:", splicedFruits);
console.log("After splice:", fruits);
console.log(" ");
// Splicing again to demonstrate the effect
console.log("Original array:", fruits);
let splicedFruits2 = fruits.splice(3, 1); // Splicing from index 3, removing 1 element
console.log("Spliced array:", splicedFruits2);
console.log("After splice:", fruits);
console.log(" ");


