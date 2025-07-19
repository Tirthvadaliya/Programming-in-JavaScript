// condition statements




// if statement

console.log(" ");
console.log("if statement example");
let age = 19
if (age > 18) {
    console.log("You are eligible to vote.");
}




console.log(" ");
console.log("if-else statement example");
// if-else statement
let age1 = 17
if (age1 > 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}




console.log(" ");
// elseif statement
console.log("if-elseif statement example");
let age2 = 19;
if (age2 > 18) {
    console.log("You are eligible to vote.");
} else if (age2 === 18) {
    console.log("You just became eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



console.log(" ");
// switch statement
console.log("switch statement example");
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

console.log(" ");

// ternary operator
console.log("Ternary operator example");
let age3 = 19;
let eligibility = (age3 >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(eligibility);


console.log(" ");
console.log(" ");

// nested if statement
console.log("Nested if statement example");
let age4 = 20;
if (age4 > 18) {
    console.log("You are eligible to vote.");
    if (age4 === 20) {
        console.log("You are 20 years old.");
    }
}
else {
    console.log("You are not eligible to vote.");
}
