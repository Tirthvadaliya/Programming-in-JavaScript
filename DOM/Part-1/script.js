


// below code is for the button click event
// function onButtonClick()
// {

//     let num=prompt("Enter a number:");
//     if (num !== null) {
//         alert("You entered: " + num);
//     } else {
//         alert("No input provided.");
//     }
//     // alert("Button clicked!");
//     // console.log("Button was clicked!");
// }






console.log("dom manipulation started");
console.log("part:-1");
console.log("==================================");
    





// //  selecting with id

// let headingg = document.getElementById("heading");
// console.dir(headingg);
// console.log(headingg);

// console.log("==================================");

// // selecting with class name
// let headingClass = document.getElementsByClassName("heading-class");
// console.dir(headingClass);
// console.log(headingClass);

// console.log("==================================");

// //  selecting with tag name
// let headings = document.getElementsByTagName("h1");
// console.dir(headings);  
// console.log(headings);


// console.log("==================================");


// // selecting with query selector
// using tag name
let headingQuery_firstelement = document.querySelector("p");//selects the first <p> element
console.dir(headingQuery_firstelement);  
console.log(headingQuery_firstelement);

let headingQuery_all_element = document.querySelectorAll("p");//selects all <> elements
console.dir(headingQuery_all_element);  
console.log(headingQuery_all_element);

console.log("==================================");

// using class name
let headingQuery_firstelement_class = document.querySelector(".heading-class");//selects the first element  with class "heading-class"
console.dir(headingQuery_firstelement_class);   
console.log(headingQuery_firstelement_class);

let headingQuery_all_element_class = document.querySelectorAll(".heading-class");//selects all elements with class "heading-class"
console.dir(headingQuery_all_element_class);  
console.log(headingQuery_all_element_class);





console.log("==================================");
// //DOM properties

// // tag name
let tagName = headingQuery_firstelement.tagName; // returns the tag name of the element
console.log("Tag Name: ", tagName);

console.log(" ");


// //innerText
// //innerText returns the visible text content of an element

let div = document.querySelector("div");
// console.dir(div); // "div.innerText" returns the text content of the div element
console.log("div_innerText: ", div.innerText);

console.log(" ");

// //innerHTML
// //innerHTML returns the HTML content of an element
console.log("div_innerHTML: ", div.innerHTML); // "div.innerHTML" returns the HTML content of the div element
console.log(" ");

let new_div= document.querySelector("div");

// new_div.innerText = "New Paragraph"; // adding new paragraph to the div
// new_div.innerHTML = "<p><i>New Paragraph</i></p>"; // adding new paragraph to the div with italic text
// console.log("div_textContent: ", new_div.textContent); // "div.textContent" returns the text content of the div element, including hidden elements
// console.log(" ");


// //textContent
// //textContent returns the text content of an element, including hidden elements

// before using the below code make sure to comment the above code line number 100 to 103
console.log("div_textContent: ", div.textContent); // "div.textContent" returns the text content of the div element, including hidden elements
console.log(" ");





