let btn=document.createElement("button");
btn.innerText="Click Me!";
btn.style.backgroundColor="red";
btn.style.color="white";
btn.style.height="50px";
btn.style.width="80px";


let bodyadd=document.querySelector("body");
bodyadd.prepend(btn);