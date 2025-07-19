let divs = document.querySelectorAll('.box');

// console.log("All elements with the class 'box':");
// console.log(divs); // This will log a NodeList of all elements with the class 'box'
// console.log(divs[0]); // This will log the first element with the class 'box'
// console.log(divs[1]); // This will log the second element with the class 'box'
// console.log(divs[2]); // This will log the third element with the class 'box'



// console.log("change value of div");
// divs[0].innerHTML = "Changed Div1"; // Change the content of the first div
// // divs[0].innerHTML = "Changed Div2"; // Change the content of the second div
// divs[1].innerText = "Changed Div2"; // Change the content of the second div using innerText
// // divs[2].innerHTML = "Changed Div3"; // Change the content of the third div
// divs[2].innerText = "Changed Div3"; // Change the content of the third div using innerText







// console.log(" ");
// console.log("Iterating through each element with the class 'box':");
// for(let i of divs)
// {
//     console.log(i); // This will log each element with the class 'box'

// }

console.log(" ");
console.log("change div value using ");
let index=1;
console.log("Iterating through each element with the class 'box':");
for(let div of divs)// 
{
div.innerText=`Changed div${index}`;
index++;
}
