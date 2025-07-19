// Question 2: Write a program that prompts the user to enter a number between 0 and 10.
// If the number is negative, exit the loop with a message. If the number is greater than 10, exit the loop with a message. If the number is equal to 5, print "Correct Guess!" and exit the loop.

// method1
for(let i=0; i<=10; i++)
{
    let num=prompt("Enter a number:");
    if(num<0)
    {
        console.log("Negative number entered, exiting loop.");
        break;
    }

     if(num>=11)
    {
        console.log("Number out of range, exiting loop.");
        break;
    }
   
    if(num==5)
    {
        console.log("Correct Guess!");
        break;
    }

}



// method2

// let Guess=25;
// let num=prompt("Enter the Number !");
// while(num!=Guess)
// {
//     num=prompt("You Enterd the Wrong Guess, Try Again !");
// }
// console.log("Correct Guess!");