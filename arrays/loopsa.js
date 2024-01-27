let a = [1,2,3,45,46]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }



// a.forEach((value,index,a) => {
//     console.log(value,index,a)
    
// });

let obj = {
    a:0,
    b:0,
    c:9
}
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
//         // console.log(element)
//     }
// }


for (const value of a) {
    console.log(value)
}