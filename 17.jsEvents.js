// into to events /
// click
// There are three ways to add events 
// 1.) On Html elements  as an attribute via onclick = "" between double quotes write javascript code 
// function printing() {
//     console.log("You clicked me bro")
// }


// This a second way using addEventListener
// Also pass normal function , function expresion and arrow function pass as your choice 
// const btn1 = document.querySelector(".btnHeadline");
// btn1.addEventListener("click" , ()=>{
//     console.log("you click me agian ")
// } ) 
// // console.log(btn1)


// This keyword inside eventlistner 
// const btn1 = document.querySelector(".btnHeadline");
// function printing () {
//     console.log("You clicked me !!!!")
//     console.log("value of this is this")
//     console.log(this);
// }
// btn1.addEventListener("click" , printing );

// // In a normarl function the object of this is voh ithoga jise par onclick event laga rah ho 


// const btn1 = document.querySelector(".btnHeadline");
// btn1.addEventListener("click" , ()=>{
//     console.log("You clicked me !!!!")
//     console.log("value of this is this")
//     console.log(this);
// });

// in arror function mein this ki value ek level up hogi 
// In an arrow function case this object ill be window 


// click event on multiple buttons
// For putting mutliple button click porperty can br used loops 
// const allButtns = document.querySelectorAll(".mybuttons button");
// // used normal for loop 
// for (let i = 0; i < allButtns.length; i++) {
//    allButtns[i].addEventListener("click" , function () {
//             console.log(this.textContent);
//    })
// }

// allButtns.forEach(function (button) {
//     button.addEventListener("click" , function(){
//         console.log(this)
//     })
// });

// usse any loops 

// * Event objects 
// const firstButton = document.querySelector(".setting");
// firstButton.addEventListener("click" , function () {
//     console.log(this)
// })

// Jab bhi mai kisi bhi element pe event listener add hoga
// js Engine --- line by line excute karta hain
// browser have js Engine + extra features +  web APIs
// jab browser ko pata chal ki user ne event perform kiya 
// jab hum listen kar rah hai
// Browser 2 important points 
// 1) call back function jo hain voh js engibe ko degi 
// 2)call back function ke saath browser jo event hua hai uski information bhi degi 
// hum iss information ko dekh sakte an function agrument deker print kara kar
// Ye info muje ek object ke form degi  

// How can see Object below is example 
// const firstButton1 = document.querySelector(".setting");
// firstButton1.addEventListener("click" , function (event) {
//     console.log(event)
// })
// // as an arument even is giving a pinter event also looking as an Object

// const allButton = document.querySelectorAll(".mybuttons button")
// for (const eachButton of allButton) {
//     eachButton.addEventListener("click" , (Event)=>{
//         console.log(Event.currentTarget)
//     })
// }
// target = kise Element humare event ko trigger kiya 
// currentTarget = kise element par humne event lintener attach kiya tha 
// Events behind the senece  how it is work 
// cmplete my visualization have picture in my mobile phone can see and remeber the points 

// practice with events 
// const btn1 = document.querySelector(".setting1");
// const conatiner = document.querySelector(".mybuttons")
// btn1.addEventListener("click" , (edit)=>{
//     edit.target.style.backgroundColor = "blue";
//     conatiner.style.backgroundColor = "blue";
//     conatiner.style.color = "white";

// })
// const btn2 = document.querySelector(".setting2");
// const conatiner2 = document.querySelector(".mybuttons")
// btn2.addEventListener("click" , (edit)=>{
//     edit.target.style.backgroundColor = "orange";
//     conatiner2.style.backgroundColor = "orange";
//     conatiner2.style.color = "black";

// })
// const btn3 = document.querySelector(".setting3");
// const conatiner3 = document.querySelector(".mybuttons")
// btn3.addEventListener("click" , (edit)=>{
//     edit.target.style.backgroundColor = "yellow";
//     conatiner3.style.backgroundColor = "yellow";
//     conatiner3.style.color = "black";

// })



// keypress event & mouse event 
// 1.keypress
// const body = document.body;
// body.addEventListener("keypress" , (event)=>{
//     console.log(event);
// })

// // 2.mouse event 
// const btn = document.querySelector(".btnHeadline")
// btn.addEventListener("mouseover" , (e)=>{
//     console.log("mouse over occured !!!!")
// })

// // mouse leave event
// const btn2 = document.querySelector(".btnHeadline")
// btn.addEventListener("mouseleave" , (e)=>{
//     console.log("mouse over occured !!!!")
// })


