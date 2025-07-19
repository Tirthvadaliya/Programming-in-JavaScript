// attributes
// example <div id="dv" > <p> here " id="dv" is a attributes </p></div>

let divs=document.querySelector("div");
console.log(divs);

console.log("Get Attributes");
let id=divs.getAttribute("id");
console.log(id);

let namee=divs.getAttribute("name");
console.log(namee);


console.log(" ");

let para =document.querySelector("p");
console.log(para.getAttribute("class"));


console.log(" ");
console.log("Set Attributes");
let paregra =document.querySelector("p");
console.log(paregra.setAttribute("class","new-class"));


console.log(" ");
let setdivid=document.querySelector("div");
setdivid.setAttribute("id","newid")
console.log(setdivid);

let setdivname=document.querySelector("div");
setdivname.setAttribute("name","newname")
console.log(setdivname);
