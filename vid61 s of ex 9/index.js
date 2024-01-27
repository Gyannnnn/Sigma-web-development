let random = math.random()
let a = prompt("Enter first Number")
let c = prompt("Enter The operator")
let b = prompt("Enter second Number")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    alert(' The result is ${eval('${a} ;${c} ;${b}')}');


}
else{

}