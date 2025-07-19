//Aim:- Write a code which can give grades to student according to its scores

let marks = prompt("Enter Your Marks");

if (marks >= 90 && marks <= 100) {
    console.log("Your Grade is :A");
}

else if(marks >= 70 && marks <= 89)
{
    console.log("Your Grade is :B");
}

else if(marks >= 60 && marks <= 69)
{
    console.log("Your Grade is :C");
}

else if(marks >= 50 && marks <= 59)
{
    console.log("Your Grade is :D");
}

else if(marks >= 0 && marks <= 49)
{
    console.log("Your Grade is : Fail");
}

else
{
    console.log("Invalid Marks")
}