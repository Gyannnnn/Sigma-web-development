let a = prompt("Enter First Number ");
let b = prompt("Enter Second Number ");

if(isNaN(a) || isNaN(b)){
    throw  SyntaxError("Soryy This is not Allowed in Javascript");
}

let sum  = parseInt(a)+parseInt(b);

function main(){
    let x = 1;
    try {
        console.log("The sum Is ", sum*x);
        return true;
    } catch (error) {
        console.log("Error Aagya Bhai !!!");
        return false
    }
    finally{
        console.log("Mission Completed !!");
    }
}

let c = main();
