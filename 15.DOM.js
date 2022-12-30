//  Dom = Document object model
// Browser seen my html fies and see elemnets present in html files and make an object in the form key pair
// Do like this we can see all property using js
// console.dir(window.document)
// console.log(document)

// 1. select Element using Element by id\
// javascript kya karta hain hr ek Element ka object bana kar usko docement object mein add kar deta hain
// get Elementby id is works only for id
// console.log(typeof document.getElementById("main-heading"));
// const mainHeading =  document.getElementById("main-heading");
// console.log(mainHeading)

// 2. select Element using query selector
// but query selector is works forid and as well as class and other html elements also
// const query = document.querySelector("#main-heading");
// console.log(query)
// const query2 = document.querySelector(".Nav-items");
// console.log(query2)
// const query3 = document.querySelectorAll(".header");
// console.log(query3)

// 3. let's change the text
// 1. textContent
// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading.textContent)
// mainHeading.textContent = "This is something else !"
// console.log(mainHeading.textContent)
// Note : using text content voh humne saara ka saara likha  hua dikhayega even humn uski display bhi ki hogi
// tabhi show karega only console no in bigger display

// 2. inner text= means inner text shows only written in display , it does'nt show
// hidding context
// const inner = document.getElementById("main-heading")
// console.log(inner.innerText)

// 3. let's change the style of elements
// const heading = document.querySelector("div.headline h2");
// // console.log(heading.style)
// heading.style.color = "black";
// // background-color = in js we want change style in javascript "-" this sign is an error in js. so we will
// // have to be write in camelcase
// // correct from is that
// const head = document.querySelector("#main-heading")
// head.style.backgroundColor = "white";
// head.style.border = "1px solid black";

// 4 .get and set attributes
// const links = document.querySelector("a");
// console.log(links.getAttribute("href").slice(1));

// we can also set the values
// const link = document.querySelector("a");
// console.log(link.setAttribute("href", "https://pwskills.com"));
// console.log(link.getAttribute("href"));


// 5. get mutliple element using getelements by class name 
// const allNavItems  = document.getElementsByClassName("nav-items")
// It is an array like object so that'swhy we do indexing 
// IF we check typeof using tupeof operator soit will give object 
// console.log(typeof allNavItems[0]) gives an object 
// Itt is give a html collection 
// console.log(Array.isArray(allNavItems[2]) ) // it is a false 
// console.log(allNavItems[1])


// 6. get multiple elements items using queryselectorall
// It is node type of list we can also indexing there 
// It is an object means object like array 
// But it is  not an array/
// array like object ----> lenght and indexing both can used 
// const allNavItems  = document.querySelectorAll(".nav-items")
// console.log(allNavItems)
// console.log( Array.isArray(allNavItems))

let colorChanging  = document.getElementsByTagName("a")
console.log(colorChanging)
// looping using in dom 
// As we know that  in dom every object is like an object like  array. we can implement loops in the object 
//  to perform some special task 
// My moto is to change background color and text color using loops 

// We have 3 types of loop 
// 1. simole for loop
// 2 for of loop
// 3. for each loop is method is not in object case  remaining two loops with HTml Collection 
// console.log(allNavItems.length)
// This was a simple for loop 
// for (let index = 0; index < allNavItems.length; index++) {
//     const storingTemproery = allNavItems[index];
//     storingTemproery.style.backgroundColor = "black";
//     for (let i = 0; i < colorChanging.length; i++) {
//         const element = colorChanging[i];
//        element.style.color = "red";
//        element.style.fontWeight = "bolder";
//        element.style.fontSize= "20px";
//     }
// }

// Let's use for of loop
// for (const navItems of colorChanging) {
//     navItems.style.color  = "blue"
//     navItems.style.backgroundColor  = "black"
// }



// Let's try with for each loop 
// beacuse for each loop always use with array methods but colorChanging is an object so we can use it 
// but we can chang into array and then can use it 
//  How to change object to array 
// colorChanging = Array.from(colorChanging)
// console.log(Array.isArray(colorChanging))
// colorChanging.forEach((navs) => {
//     navs.style.color = "pink";
//     navs.style.backgroundColor = "black";
// });



// Inner HTML
// When we between div and html element these is called inner html 
// const heading =   document.querySelector(".headline")
// console.log(heading.innerHTML)
// We can change it 
// so we set like this values in js  
// heading.innerHTML = "<h1>Listen to carefully me </h1>"
// // heading.innerHTML += "<button class = \" btn btnHeadline \">  Learn More </button>"
// console.log(heading.innerHTML)
// 




