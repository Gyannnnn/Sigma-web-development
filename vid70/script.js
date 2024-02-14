console.log("Initialising The programme");
let pro  = document.querySelector(".container").children;
function getRandomColor()
{
    let val1 =Math.ceil( 0+Math.random()*255);
    let val2 =Math.ceil( 0+Math.random()*255);
    let val3 =Math.ceil( 0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`;
    

}
Array.from(pro).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});

