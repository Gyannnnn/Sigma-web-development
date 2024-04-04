//  4 PILLARS OF DOM
// 1 . SECLECTION OF AN Element
// 2 . CHANGING HTML
// 3 . CHANGING CSS
// 4 . EVENT LISTNER


// var a  = document.querySelector("h1")


// a.style.color = "brown"

// a.style.backgroundColor = "black"


// a.addEventListener("click",function(){
//     console.log("Hey I am Clicked");
//     a.innerHTML = "Badal Gaya Mei tu nikal  "
//     a.style.color = "pink";
//     a.style.backgroundColor = "green";

// })
// a.addEventListener("mouseover", function(event) {
//     console.log(event.clientX, event.clientY);
// });



var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#btn");
var click = 0;
btn.addEventListener("click", function () {
    if(click == 0){
        bulb.style.backgroundColor = "yellow";
        bulb.style.borderStyle = "dotted"
        bulb.style.boxShadow = "0 0 5px yellow, 0 0 10px yellow, 0 0 100px yellow,0 0 1000px yellow"
        console.log("clicked")
        btn.innerHTML = "OFF";
        click++;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        bulb.style.borderStyle = "solid";
        bulb.style.boxShadow = "0 0 0 transparent"

        btn.innerHTML = "ON";
        click =0;
    }
})
