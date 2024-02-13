console.log("Gyana")
// let boxes = document.getElementsByClassName("box");
// console.log(boxes)
// boxes[2].style.backgroundColor = "red"

document.getElementById("red").style.color = "black"
document.querySelector(".box").style.backgroundColor = "yellow"
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "green"
    
});