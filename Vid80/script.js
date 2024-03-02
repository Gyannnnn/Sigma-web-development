// console.log("Object Oriented Programming !!");


// let obj  ={
//     a:1,
//     b:"Gyanaranjan"

// }

// console.log(obj);

// let animal ={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }
// rabbit.__prototype__ = animal;



class Animal{
    constructor(name){
        this.name = name
        console.log("Class Is created !!")
    }
    eats(){
        console.log("Kha raha Honn")
    }
    jumps(){
        console.log("kood raha Honn")
    }
}

class lion extends Animal{
    
    constructor(name){
        super(name)
        this.name = name
        console.log("Class Is created and he is a lion ")
    }
    eats(){
        console.log("Kha raha Honn roar")
    }  


}

let a = new Animal("Bunny");
console.log(a);

let l = new lion("Shera")
console.log(l);