console.log("Fetch API Padh Liya Guys ...");



// const url = "https://cat-fact.herokuapp.com/facts";

// let getfacts = async ()=>{
//     console.log("Getting Data .......");
//     let respons = await fetch(url);
//     console.log(respons) // JSON FORMAT
//     let data = await Promise.json();
//     console.log(data[0].text);
// }

// function getfacts(){
//     fetch(url)
//     .then((response)=>{
//         return response.json;
//     }).then((data)=>{
//         console.log(data);
        
//     })

// }
// getfacts();


// const url = "https://cat-fact.herokuapp.com/facts";

// function getfacts(){
//     fetch(url)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         data.forEach(fact => {
//             console.log(fact.text)
//         });
//     })
// }

// getfacts()

// const url = ("https://jsonplaceholder.typicode.com/users")

// function getfacts(){
//     fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }

// getfacts();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching data:', error));


