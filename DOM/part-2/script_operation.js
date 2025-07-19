// create button using "createElement"
let btn=document.createElement("button");
btn.innerText="Click Me!";
console.log(btn);

// insert element
let div=document.querySelector("div");
console.log("simply uncomment below insert elemnets operation one by one to watch the output!!")
div.append(btn); // add element at end of div

// div.prepend(btn); // add element at strating of div

// div.before(btn); // add element just before div

// div.after(btn); // add element just after div

console.log(" ");
let heading=document.createElement("h1");
heading.innerHTML="<i>hii! This is new H1 heading using insert element</i>";   
document.querySelector("body").prepend(heading);

console.log(" ");
//Delete Element

let Deleteh2 = document.querySelector("h2");
Deleteh2.remove();
