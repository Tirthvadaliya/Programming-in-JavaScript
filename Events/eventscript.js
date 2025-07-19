// Note :- inline script and script.js bane mathi higest priority "script.js" ni hoy 



// below code is for the button click event
console.log("button click mothod1!");
function onButtonClick()
{

    let num=prompt("Enter a number:");
    if (num !== null) {
        alert("You entered: " + num);
    } else {
        alert("No input provided.");
    }
    // alert("Button clicked!");
    // console.log("Button was clicked!");
}




console.log(" ");
console.log("button click mothod2!");
// below code is for the button click event
let btn2= document.querySelector("#btn2");
btn2.onclick =()=>
    {
        alert("button was click1ed!!")   
    }



    
// console.log(" ");
// console.log("mouseover on div!");
// let ms=document.querySelector("div");
// ms.onmouseover = () =>
//     {
//         console.log(" you are inside the Div!")
//     }




console.log(" ");
console.log("Event Object!");
let btn3= document.querySelector("#btn3");
btn3.onclick =(evt)=> // evt = event , we can write any name for it.
    {
        console.log(evt);   
        console.log(evt.type);   
        console.log(evt.target);   
        console.log(evt.clientX, evt.clientY);   
    }




console.log(" ");
console.log("mouseover on div Using Event object!");
let ms2=document.querySelector("div");
ms2.onmouseover = (evnt) =>
    {
        console.log(" you are inside the Div2!")
          console.log(evnt);   
        console.log(evnt.type);   
        console.log(evnt.target);   
        console.log("x :-",evnt.clientX, " y :-",evnt.clientY);  
    }


