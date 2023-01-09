// fetch is an inbuilt function js 
// When we are getting some response on server , so we have to more no lines and also uses promise 
// or other thing but in the fetch we don't required it 
// // Fetch automatically fetch data from server and gius us 
// fetch return promise 
// const URL = "https://jsonplaceholder.typicode.com/postss";
//  fetch(URL)
// // we know that fetch rturn Promise so we cn chaining 
// .then(Response =>{
//     // It is also returning promise 
//     // console.log(Response.json());
//     console.log(Response)
//     if (Response.ok) {
//         const respo =  Response.json(); // yeah bhi ek promise return karega 
//         return respo;
//     }
//     else{
//         throw new Error("Something went wrong ")
//     }
// }).then(data =>{
//     console.log(data)
// })
// .catch(error =>{
//     console.log("inside catch")
//     console.log(error)
// })

// // fetch tabhi reject hoge tab apke pass network related problem aa rahi hain  

 

// async and await
// when we are doing .then and .then 
// using async and await  uses keyword we don't required to do .then using async and await 

const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPost(){
// // this functon always return a promise  beacuse we are adding async 
// const response = await fetch(URL);
// if(!response.ok){
   
//      throw(new Error("SOmehting went wrong "))
// }
//     const data = await response.json()
// return data ; //  you can't do like that beacuse it is not return a data it is return a promise 

// }

//  Can we with arrow function

const getPost = async() =>{
    // const response = await fetch(URL);
    const response = await fetch(URL);
if(!response.ok){
   
     throw(new Error("SOmehting went wrong "))
}
    const data = await response.json()
return data ; 
}

// same kaam karta jasie hume  .then karke karte async function bhi humne ek promise return karta hain 
// await puri cheezo ko fetch karke fhir return karta hain 
// and await iss fetch promise ka resolve and reject hone ka wait karega 
// so we can take like this method 
getPost()
.then(data=>{
    console.log(data);
})
.catch(error =>{
    console.log()
})

