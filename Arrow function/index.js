// const sayHello=()=>{
//     console.log('Hello World');
// }

// sayHello()

// const printHi =(name)=> console.log('hi '+name)
// printHi('Gyanranjan')


const x ={
    name:'Gyanranjan Patra',
    role:"js Developer",
    exp:30,
    rkd:  function(){
        // let that  = this
        setTimeout ( ()=>{

            console.log(`The name is ${this.name}\nThe role is ${this.role}\nAnd Experiance is ${this.exp}`)
        },2000)
    }
}
x.rkd();