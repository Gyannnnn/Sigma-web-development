console.log("Gyana Is a hacker ")
console.log("Runa Is a hecker ")


setTimeout(() => {
    console.log("Set time out executed !")
}, 2000);

console.log("Later Part is executed !!");


const fn= () =>{
    console.log(Runa);
}
const callback = (arg ,fn) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Gyanaranjan" , fn)
    document.head.append(sc);

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);