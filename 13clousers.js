// Closures
// Example 1
// function can return another function
function printFullName(firstName , lastName){
    function Name1 () {
        console.log(firstName , lastName)
    }
    return Name1;
}
const ans = printFullName("Harshit" , "Sharma");
// console.log(ans);
ans();

// clouser =jab bhi hum function ko return karega from another function se 
// means jo Name1 ka function jah pesent tha  voh printFullName ke function ke under tha 
// uske loacl memory variable ke saath leker retun hoga khali haath nahi hoga 
// jab name1 ka function return hoga toh apne lexical environment se loacl variable leker return hoga 

// Eample 2 
console.log("these is m second examople on closures")
function hello(x) {
    const a ="var1"
    const b ="var2"
    return function () {
        console.log(x,a,b);
    }
}
const ans1 = hello("args");
ans1()



// Example 3
// const prompt = require("prompt-sync")();
// function myFunction(power) {
//     return function (number) {
//         return number ** power
//     }
// }
// let a = Number(prompt("Enter the power "));
// console.log(typeof a);
// let b = Number(prompt("Enter the number "));
// console.log(typeof b);
// const square = myFunction(a)
// const ans2 = square(b)
// console.log("The square is : " , ans2);


// Example 4
function myFunc () {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log(" hi ,  i am called !!");
            counter++
        }
        else
        {
            console.log("mein ek baar called ho chuka hu ")
        }
    }
}

const  f1 = myFunc();
f1(); 
f1();
f1();