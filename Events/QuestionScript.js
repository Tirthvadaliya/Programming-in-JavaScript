// Change the background colour using toggle button


// Method 1
// let modebtn = document.querySelector("#mode");
// let currentMode="Light";

// modebtn.addEventListener("click", ()=>
// {
//   if(currentMode=="Light")
//   {
//     currentMode="Dark";
//     document.querySelector("body").style.backgroundColor="black";
//   }
//   else
//   {
//     currentMode="Light";
//     document.querySelector("body").style.backgroundColor="White";

//   }
// console.log(currentMode);
// });


// Method 2
let modebtn = document.querySelector("#mode");
let bodyy= document.querySelector("body");
let currentMode="light";

modebtn.addEventListener("click", ()=>
{
  if(currentMode=="light")
  {
    currentMode="dark";
    bodyy.classList.add("dark");
    bodyy.classList.remove("light");
  }
  else
  {
    currentMode="light";
    bodyy.classList.add("light");
    bodyy.classList.remove("dark");
  }
console.log(currentMode);
});