// synchrounous programming and asynchronous programming
// 1.synchrounous programming
// Jitni  programming abhi tak kari pichle files mein voh sab synchronous programming
// In short way pahle ek kaam hoga fhir duser start hoga jab durse finish hoga tab third work start and so on .../
// Js synchrounous programmming language  hain but Single thread
// It is an blocking element  beacuse we know that sunchronous mein ek line ke badd dusri line execute hoi hain to isliya aage code block in grahta hain

// console.log("script start")
// for (let i = 0; i < 1000; i++) {
// console.log("indside the loop")

// }
// console.log("script end")

// setTimeout
// setTimeout as input lega ek function saath mein lega time kitni second  baad call hoga
// settime out javascript provide nahi karta hian web apis provide karti hain
// It is not blocking code //
// 1.) settime goes to webAPi ;
// 2.) then return  function to the callback queue
// 3.) event loop check if call stack having any porocesssing inside call stack event doesn't allow to gos exectues the
// time function into the stack once gloabal exection complete it will send
// 4.) that's why setim out prin in last

// setTime out retunr mein deta hain iD
// console.log("script start");
// function hello() {
//     console.log("Hello world");
// }
// const ID = setTimeout(hello, 2000);
// console.log("the settime ID is " , ID);
// // On clear time the function doesn't print  beacuse uska time clear hojat hain using by ID
// clearTimeout(ID);
// console.log("script end");

// set interval
// Almost similar to settime
// console.log("Start script")
// setInterval(() => {
//     console.log(Math.random())
// }, 6000);
// console.log("End script")

// let's see the real life example
// const body = document.body
// const button = document.querySelector("button");
// button.addEventListener("click" , ()=>{
//     clearInterval(intervalID);
//     button.textContent = body.style.backgroundColor;
// })
// const intervalID = setInterval(() => {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.backgroundColor = rgb;
//     // button.style.backgroundColor = rgb ;
//     // button.style.color = blue ;
// }, 1000);

// understand callback
// callback karne as Parametershume dusre function ko pass kar sakte hain \
// it was normal callback function using a synchronous
// function myFunc(callback) {
//     console.log("function1 doing some task 1" )
//     callback();
// }
// function myFunc2() {
//     console.log("function1 doing some task 2" )
// }
// pass also
// myFunc(function() {
//     console.log("function1 doing some task 2" )
// })
// also pass arrow function
// myFunc(()=> {
//     console.log("function1 doing some task 2" )
// })

// adding two number
// function getTwoNumbers(number1 , number2 , callback){
//     console.log(number1,number2)
//     if (typeof number1 === "number" && typeof number2 ==="number") {
//         callback(number1,number2)
//     }
//     else{
//         console.log("Entered the wrong data ")
//     }
// }

// getTwoNumbers(5,6,(num1 , num2) => {
//     console.log("The sum of tow numbers is : " , num1 + num2)
// });

// sometime in  a one function having more than one callback how to deak that question let's see
// Inthe palce of callback we are check soe condition we do lik that
// function getTwoNumbers(number1 , number2 , onSccuess , onFailure){
//     //     console.log(number1,number2)
//         if (typeof number1 === "number" && typeof number2 ==="number") {
//             onSccuess(number1,number2)
//         }
//         else{
//             onFailure()
//         }
//     }

//     getTwoNumbers("6",6,(num1 , num2) => {
//         console.log("The sum of tow numbers is : " , num1 + num2)
//     } , ()=>{
//         console.log("check the number ")
//         console.log("check the number you eneterd wrong number ")
//     });

// Now we will talk about asyunchrounous js
// callbacks , callback hell , pyramid of doom
console.log("hello world !!!!!");
// we can make it nested settime out
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// callback hell 
// But it is calculate every settime outt time so that's taking so time 
// setInterval(() => {
//   heading1.textContent = "Headind 1";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "Heading 3";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Heading 4";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "Heading 5";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "Heading 6";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "Heading 7";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);


// Let's try with function 
// Also called as pyrmaid as doon 
// Beacuse the shape is like a pyramid 

function set(element , text , color , time , onSccuessCallback , onFailureCallback) {
  setTimeout(()=>{
    if (element) {
      element.textContent = text;
      element.style.backgroundColor = color;
      if(onSccuessCallback()){
        onSccuessCallback();
      }
    }
    else
    {
          if (onFailureCallback()) {
           onFailureCallback();
          }
    }
    } , time)
}


// this is know as pyrmid of doom 
set(heading1 , "Aayush" , "red" , 2000 ,()=>{
  set(heading2 , "Aayush" , "pink" , 1000 ,()=>{
    set(heading3 , "Aayush" , "yellow" , 3000 ,()=>{
      set(heading4 , "Aayush" , "cyan" , 2000 ,()=>{
        set(heading5 , "Aayush" , "black" , 1000 ,()=>{
          set(heading6 , "Aayush" , "orange" , 1000 ,()=>{
            set(heading7 , "Aayush" , "blue" , 2000 ,()=>{
              set(heading1 , "Aayush" , "brown" , 3000 ,()=>{
  
              } , ()=>{ console.log("These elements doesn't exist ")});
            } , ()=>{ console.log("These elements doesn't exist ")});
          } , ()=>{ console.log("These elements doesn't exist ")});
        } , ()=>{ console.log("These elements doesn't exist ")});
      } , ()=>{ console.log("These elements doesn't exist ")});
    } , ()=>{ console.log("These elements doesn't exist ")});
  } , ()=>{ console.log("These elements doesn't exist ")});
} , ()=>{ console.log("These elements doesn't exist ")});