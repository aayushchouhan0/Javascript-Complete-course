//  Intro about promise
// Promise Ek asie value  jo abhi nahi pata but future mein pata chalgi  = future value
// Here s an examle to deep understand
// In promise we have to key sholud be required  first is status and second is value
// intially status is pending if status pending so vale also undefined
// we are going  to kitchen to making special dishe is fired rice , we essential vegetables required to make a food vegetables rice and salt
// if all items avaliabe for making thne promise will be fullfiled . if there is any items not avaliable so promise will be reject
// let's take example
// here  we are creating a promies
// promise as takes a callbacks function and two agruments reject and resolve
// we storing promis into a variavble
// Promise is not feaure of js . it is a feature of browser
// lets see how promise work as an asynchronous js
// Promise always add in queueMicrotask mein
// setTimeout always add in call back queue
// const bucket = ["coffee" , "chips", "vegetables", "salt" ,"rice"];
// const firedRicePromise = new Promise((resolve , reject)=>{
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//         resolve("fired rice ready to eat")
//     }else{
//         reject("Something missing is there ")
//     }
// })

// Here we are consuming promise
// In javascript most of the time we consuming the promises
// how to consume
// then is a method then takes as an input ek callback function leaga is callback uns=der voh value aayi gi jo mein function reslove karegi
// then method ke under hum two callback function pass kar sakte first callback reslove and second reject ke liya
// if callback resolve it they will print
// firedRicePromise.then((myFiredRice) => {
//     console.log(myFiredRice);
// } , (myRejectedValue)=>{
//     console.log(myRejectedValue)
// })

// Do also like this
// firedRicePromise.then((myFiredRice) => {
//     console.log(myFiredRice);
// } ).catch((myRejectedValue)=>{
//     console.log(myRejectedValue)
// })

// => we are going to deep uderstand , how it is wrok in broswer

// As you can see output what coming => This code executes line by line  when line ame on firedRicePromise and setTimeout that things go to web a
// api and give output first print all output of global context text after call stack become empty event loop send
// firedRicePromise into call stack to shwo  then after go  setTimeout into call stack to exectues
// As we know that setTimeout goes to callback queue and similarly promises goes microtask queue
// that question rasie hee who go first in stack
// First go in stack mircotask queue  bacuse there s more priority as compare to callback queue
// console.log("script start !!!!!!")

// const bucket = ["coffee" , "chips", "vegetables", "salt" ,"rice"];
// const firedRicePromise = new Promise((resolve , reject)=>{
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//         resolve("fired rice ready to eat")
//     }else{
//         reject("Something missing is there ")
//     }
// })
// firedRicePromise.then((myFiredRice) => {
//     console.log(myFiredRice);
// } ).catch((myRejectedValue)=>{
//     console.log(myRejectedValue)
// })

// // making setTime out function
// setTimeout(()=>{
//     console.log("I'm inside the settime out function ");
// })

// for (let i = 0; i < 100; i++) {
//     console.log(Math.floor((Math.random() * 100)) , i);
// }

// console.log("script end !!!!!!")

// Function return a promise
// So we can return promise through function
function riceReturning() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve("fired rice ready to eat");
    } else {
      reject("Something missing is there ");
    }
  });
}

riceReturning()
  .then((myFiredRice) => {
    console.log(myFiredRice);
  })
  .catch((myRejectedValue) => {
    console.log(myRejectedValue);
  });

//  promise and setTime
// function myPromise (){
//     const value = false;
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             if (value) {
//                 console.log("Resolve")
//             }
//             else{
//                 console.log("rejected");
//             }
//         })
//     })
// }

// myPromise().then(()=>{
//     console.log("true")
// }).catch(()=>{
//     console.log("False")
// })

// Promise.resolve
// Promise chaining
// note:  then method always retrun a promise
const myPromises = Promise.resolve("harshit");
myPromises.then((value) => {
  console.log(value);
});

// As we know that then() method alwaya give us a promise using that we can make it promise chaning

function promiseis() {
  return new Promise((resolve, reject) => {
    resolve("Aayush");
  });
}
promiseis()
  .then((value) => {
    console.log(value);
    value += "Chouhan";
    return value;
  })
  .then((value) => {
    console.log(value); // js work internally like this promise.resolve(value)
    // if you anything not return it will give undefined
    value += "Hero";
    return value;
  })
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log(value);
    // In this case you will get undefined beacuse we are not returning anything
  });

// let's slove aout previous examle
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function set(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.backgroundColor = color;
        resolve(time );
      } else {
        reject();
      }
    }, time);
  });
}

set(heading1, "Aayush", "red", 2000).then((data) => {console.log(data );
  return set(heading2, "Aayush1", "pink", 1000).then((data) => {console.log(data);
    return set(heading3, "Aayush2", "black", 2000).then((data) => {console.log(data);
      return set(heading4, "Aayush4", "violet", 1000).then((data) => {console.log(data);
        return set(heading5, "Aayush5", "darkgreen", 3000).then((data) => {console.log(data);
          return set(heading6, "Aayush6", "purple", 1000).then((data) => {console.log(data);
            return set(heading7, "Aayush7", "yellow", 2000);
          });
        });
      });console.log(data);
    });
  });
});
