// what is sync and


// console.log("hey");
// console.log("Hey 2");

// setTimeout(function(){

//     console.log("Hey 3");
// },0)
// console.log("Hey 4");
// console.log("Hey 5");
// console.log("hey 6");

// setTimeout(function(){
//     console.log("Insidepart");
// },3000)

// console.log("Outside Part");



// ...............RESOLVE.._________________________


var ans = new Promise((res,rej)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
})


ans.then(function(){
    console.log("Resoved");
})
  .catch(function(){
    console.log("Rejected");
})



console.log("________________________________________________________________________");


var ans1 = new Promise((res,rej)=>{
    var n  = Math.floor(Math.random()*10);
    if(n<5){
        return res();
    }
    else{
        return rej();
    }
})


ans1.then(function(){
    console.log("Below");
}).catch(function(){
    console.log("Above");
})