console.loge("Hello, World!");

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