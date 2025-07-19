// Aim :- Calculate the discounted price of items in an array

let items = [100, 200, 300, 400, 500];

// Using forEach

// let i=0;
// for(let val of items) {
//     console.log(`Item at index ${i}: ${val}`);
    
//     let offer=val/10; // 10% off
//     items[i] = val - offer; // Update the item with the discounted price
//     console.log(`Discounted price at index ${i}: ${items[i]}`);
//     console.log(" ");
//     i++;
// }


// Using for loop
for(let i=0; i<items.length; i++)
{
    let offer=items[i]/10; // 10% off
    items[i] = items[i] - offer; // Update the item with the discounted price
    console.log(`Discounted price at index ${i}: ${items[i]}`);
    }
// console.log("Discounted items: ", items);
// Output: Discounted items:  [ 90, 180, 270, 360, 450 ]

