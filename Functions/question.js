// Aim :- Count the number of vowels in a given string

//method1

// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//             count++;
//         }
//     }
//     return count;
// }

// // console.log("Count of vowels in 'Hello World':", countvowels("Hello World"));
// let countvowell = prompt("Enter the string to count vowels:");
// console.log("String: ",countvowell);
// console.log("Count of vowels:", countvowels(countvowell));



//method2
function countvowels(str)
{
    let count = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
        {
            count++;
        }
    }
    return count;
}
let countvowell = prompt("Enter the string to count vowels:");
console.log("String: ",countvowell);
console.log("Count of vowels:", countvowels(countvowell));