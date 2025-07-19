// filter 

// even numbers from an array using filter method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr.filter((num) => {
  return num % 2 === 0;
}); 
console.log(evenArr); // Output: [2, 4, 6, 8, 10]