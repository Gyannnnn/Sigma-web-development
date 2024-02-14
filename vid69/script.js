// let a = 7

// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())
//    let c = arr.slice(1,).reduce((a, b)=> a*b )
//    return c
// }


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))

// practice
prompt("Enter a number")

let num = prompt;
function factorial(num){
    let facto = 1;
    for (let index = 1; index <= num ; index++) {
       facto = facto*index;

    }
    return facto;
}

console.log(factorial(num));