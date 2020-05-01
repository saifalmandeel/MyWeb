var fName = prompt("Please enter your name", "<enter your name>");
var color = prompt("what color you like?", '');
var confirm = confirm("Welcome to our website");
var response
if (fName === '<enter your name>' || fName === '') {
    response = "Hello friend! How are you today?";
} else {
    response = "Hello " + fName + "! How are you today?";
}


var header = document.getElementById("fgth");
var welcome = document.getElementById("welcome");
//var button = document.getElementById("SAM-button");
//var colors = ['red', 'white', 'green', 'pink', 'black'];
//console.log(response);
//colors.forEach(x => button.style.backgroundColor = x);


welcome.textContent = response

header.style.borderColor  = color

