// javascript promise object can be :
// pending
// resolve
// rejected

// console.log("---------------------------");
// promises is is a solution of call back Hell

// let promise = new Promise((resolve, reject) => 
// {
//     console.log("This is Promise !");

//     // resolve("Promise is resolved !"); // print the promises
//     reject("kuch to gadbad hai daya !");

// });

// console.log("---------------------------");




// function getData(dataId, getNextData) 
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
// let promise=getData(123);
// console.log(promise);
// console.log(setTimeout(()=>
// {
// console.log(promise);
// },6000));


// console.log("---------------------------");

// .then and .catch

// const getpromise = () =>
// {
//      return new Promise((resolve, reject )=>
//     {
//        console.log(" I am promise");
//        resolve("I am resolved");
//     //   reject("I am rejected");
//     });
// };

// let promise=getpromise();

// promise.then((res)=>
//     {
//         console.log("I am then !");
//         console.log("promise resolved !",res);
// })

// promise.catch((err)=>
// {
//     console.log("I am Catch !");
//     console.log("promise rejected !",err);    
  
// });






// console.log("---------------------------");

// function asyncFun1()
// {
//     return new Promise((resolve, reject)=>
//     {
      
//       setTimeout(()=> 
//        {
//         console.log("I am promise with Some Data 1!");
//         resolve("Success 1 !");
//         },3000);  
//     });
// }


// function asyncFun2()
// {
//     return new Promise((resolve, reject)=>
//     {
      
//       setTimeout(()=> 
//        {
//         console.log("I am promise with Some Data 2 !");
//         resolve("Success 2 !");
//         },3000);  
//     });
// }


// method 1
// promise chaining

// console.log("Fatching Data 1!");
// let p1 = asyncFun1();
// p1.then((res)=>{
//     console.log("Fatching Data 2!");
//     let p2 = asyncFun2();
//     p2.then((res)=>{
//     console.log(res);
//     });
//     // console.log(res);
// });


//method 2
// console.log("Fatching Data 2!");
// let p2 = asyncFun2();
// p2.then((res)=>{
//     console.log(res);
// });

// method3
// promise chaining


// console.log("Fatching Data 1!");

//     asyncFun1().then((res)=>{
//     console.log("Fatching Data 2!");
    
//     asyncFun2().then((res)=>{
//     console.log(res);
//     });
//     // console.log(res);
// });

// console.log("---------------------------");
