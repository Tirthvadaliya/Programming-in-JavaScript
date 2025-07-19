// EventListener
console.log("ADD EventListener ");

let btn1=document.querySelector("#btn");

btn1.addEventListener("click", ()=>{
    console.log("Button was Clicked!");
});

btn1.addEventListener("click", ()=>{
    console.log("Button was Clicked--Handeler2!");
    console.log("here both Event handeler printed!!");
});


btn1.addEventListener("click", (evt)=>{
    console.log("----------------------------------------------------------------");
        console.log(evt);   
        console.log(evt.type);   
        console.log(evt.target);   
        console.log(evt.clientX, evt.clientY);   
});

console.log(" ");




//REMOVE EventListener
// Note:- Callback reference should be same to remove



console.log("REMOVE EventListener ");
let btn2=document.querySelector("#btn2");

btn2.addEventListener("click", ()=>{
    console.log("Button was Clicked!--handeler1");
});

const Handeler2 = ()=>{
    console.log("Button was Clicked!--handeler2");
};


btn2.addEventListener("click", Handeler2); // use the direct variable store function



btn2.addEventListener("click", ()=>{
    console.log("Button was Clicked!--handeler3");
});

btn2.addEventListener("click", ()=>{
    console.log("Button was Clicked!--handeler4");
});


btn2.removeEventListener("click", Handeler2); // use the direct variable store function