//DOM manipulation
//Style
//node.style

let divstyle=document.querySelector("div");
console.log(divstyle.style);

divstyle.style.backgroundColor="green"
divstyle.style.fontSize="26px";
divstyle.innerText="HELLO!";

function Hide()
{
    divstyle.style.visibility="hidden";
}

console.log(" ")

