//Aim :- To create a username based on the user's full name and its length
// This code prompts the user for their full name and generates a username based on the name and its length.
let fullname = prompt("Enter your full name:");
let username="@"+fullname+fullname.length;
console.log("Your username is: " + username);