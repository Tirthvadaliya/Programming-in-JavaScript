// caallback hell chaining


function getData(dataId, getNextData) 
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 1000);
    });
}


// promise chain
//method1
// let promise=getData(1);

// promise.then((res)=>
  // {
//  console.log(res);
// });

//method2
// getData(1).then((res)=>{
  // console.log(res);
// });




// getData(1).then((res)=>{
// console.log(res);
// getData(2).then((res2)=>
//   {
//     console.log(res);
//   });
// });



 //actual promise chain

console.log("Fatching Data 1!");
getData(1).then((res)=>
{
  console.log("Fatching Data 2!");
  return getData(2);
})
 .then((res)=>{
  console.log("Fatching Data 3!");
  return getData(3);
})
 .then((res)=>{
 console.log(res);
      
 })