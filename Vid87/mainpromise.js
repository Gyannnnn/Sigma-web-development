import fs from"fs/promises"


let a = await fs.readFile("gyana2.txt");

let b = await fs.appendFile("gyana2.txt","\n\n\n\n\n\n\nI am A Disco dancer !!!!!!!!");
console.log(a.toString());