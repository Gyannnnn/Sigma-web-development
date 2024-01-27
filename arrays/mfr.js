let arr = [ 1,45,78,23,445,5,67,3 ]


// // for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr = arr.map((e)=>{
    return e**2;
}
)


console.log(newarr)