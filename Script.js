
funciton changeColor() {
    var body = document.getElementByTagName("body")[0];
    var colorSelect = document.getElementById("fcolor");
    body.style.color = colorSelect.options[colorSelect.selectedIndex].value;
}


var header = document.getElementById("header")


var date = new Date();
var hours = date.getHours();

console.log(hours)


if(hours >=4 && hours < 12) {
    header.innerText = "Good morning"
}

if(hours >=12 && hours < 17) {
    header.innerText = "Good day"
}

if(hours >=15 && hours < 19) {
    header.innerText = "Good afternoon"
}

if(hours >=19 && hours < 23) {
    header.innerText = "Good evening"
}
