let company = ["Google", "Microsoft","uber", "Apple", "Amazon"];
console.log("Original array:", company);

// task 1: remove the first company from the array
let removecomp=company.shift();
console.log("After removing the first company:", company);
console.log("Removed company:", removecomp);
console.log(" ");

// task 2: add facbook at the end of the array
let addcomp=company.push("facebook");
console.log("After adding Facebook at the end:", company);
console.log(" ");

let replacecomp=company.splice(1,1,"Tesla");
console.log("After replacing the company at index 2 with Tesla:", company);
console.log("Replaced company:", replacecomp);
console.log(" ");