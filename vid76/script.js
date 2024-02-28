async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = x.json()
    return data;
}
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Gyanranjann")
//         }, 3500);
//     })
// }

async function main() {


    console.log("Loading Modules")
    console.log("Do Something Else !")
    console.log("Load Data ")


    let data = await getData()
    console.log(data);
    console.log("Processe Data");
    console.log("Task 78");
}

main();
// data.then((v)=>{
//     console.log(data);
//     console.log("Processe Data");
//     console.log("Task 2");
// })