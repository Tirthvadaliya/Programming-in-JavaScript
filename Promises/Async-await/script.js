// async function always returns a promise

// async function hello()
// {
//     console.log("hello !");
// }
// hello();


// console.log("----------------------");

// function api()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{ 
//          console.log("wehter data !");
//          resolve(200);
//         },2000);   
//     });
// }

// async function getWeather()
// {
//     await api(); // 1st call
//     await api(); // 2nd call
// }

// getWeather(); 
// console.log("----------------------");

function getdata(dataId)
{
    return new Promise((resolve,reject)=>
    {
       setTimeout(()=>
       {
         console.log("Data ",dataId);
         resolve("success !");
       },2000);
    });
}

async function getAllData()
{
    console.log("getting data 1 ");
    await getdata(1); // 1st call
    console.log("getting data 2 ");
    await getdata(2); // 2nd call
    console.log("getting data 3 ");
    await getdata(3); // 3rd call
      
}
// getAllData();




// NOTE :- IIFE (immediately invoked Function Expression)
// automatically call thay jay 
(
       async function()
   {
       console.log("getting data 1 ");
       await getdata(1); // 1st call
       console.log("getting data 2 ");
       await getdata(2); // 2nd call
       console.log("getting data 3 ");
       await getdata(3); // 3rd call
         
   }
)();