// Aim :-get a user to input a number using prompt("enter a number") . Check if the number is a multiple of 5 or not 
let num=prompt("Enter the Number:");

if(num % 5 === 0){
    console.log(num,"is a multiple of 5.");
}else{
    console.log(num,"is not a multiple of 5.");
}