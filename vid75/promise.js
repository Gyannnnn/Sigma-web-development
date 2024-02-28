console.log("This is a Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = math.random();
    if (a < 0.5) {
        reject("No The random Number Is not Supporting You !!!")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done !!!")
            resolve("harry")
        }, 1000);

    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = math.random();
    if (a < 0.5) {
        reject("No The random Number Is not Supporting You !!!2")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done !!!2")
            resolve("harry2")
        }, 1000);

    }
})

let p3 = Promise.any([prom1,prom2])

p3.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err)
})