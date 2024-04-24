const fs = require("fs");


console.log(fs);

console.log("Starting");
// fs.writeFileSync("Gyanranjan.txt","Gyanranjan Is A Good Boy");

fs.writeFile("gyana2.txt","Gyanaranjan Is Not A Gud Boy",(error)=>{
    console.log("Done")
    fs.readFile("gyana2.txt",(err,data)=>{
        console.log(err)
        console.log(data.toString())
    })
});
console.log("Ending")


fs.appendFile("gyana2.txt","Gyanarobo",(e,d)=>{
    console.log(e,d);
})


// fs.writeFile("gyana2.txt", "Gyanaranjan Is Not A Good Boy", (err) => {
//     if (err) {
//         console.error("Error occurred while writing file:", err);
//     } else {
//         console.log("Done writing file!");
//     }
// });

// console.log("Ending");



