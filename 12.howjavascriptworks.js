// // how javascript works we will discuss everyting about in this  pages
// 1 . why compilation needed compilation phase  ?
// // firstly javascript code complie by complier  and break down into three parts 
// 1. token and lexing  =  token and lexing is slicing of a code into a tiny "Chunks" these method is know as 
// token and lxing .
// 2. parsing =  The tiny code is passes by for parsing which makes a Abstract Syntax three
// 3. code and generation = pasing merge the chunks code and goes for execuation 
// why should do this steps?E
// beacuse we check  1. determing aproperiate scopefull variable 
// kunki hum ko pata chale sake ki usse variable  scope kaha tak hain 
// jo javascript ka coe function mein hota toh coh global memoery hota that's mean that was global scope 
// // 2.Early error checking 


// 2.scond very important phase is known as code execuation phase 
// code execution are two types 
// 1. global context execution 
// 2. Fuction context execution 
// In js executes inside excution context mean to execute the code we will have to create a execution context 
// this execution context is known as global execution context below is an example
// It is alos makes from thress parts 
// 1. creation phase (kiska phase globl execution phase ) also called global memoery
// 2. code execution phase
// Javscripy is a synchronus programming language that is mean jab tak ek line execute nahi hoti tab tak dusri line exectue 
// hone start nahi hogi  
//  second line exectutes nahi karega and so on ...
// ashynchrounus ke feature browser provide karta hain to js 
// And it is single threaded programming languages 
// console.log(this);
// console.log(window);
// console.log(this)
// console.log(window);
console.log(myFunc)
console.log(fullName) 
myFunc();

function myFunc() {
    console.log("this an my function \n")
}
var firstName = "Puspa";
var lastName = "Chouhan";
var fullName = firstName + " "  + lastName;
console.log(fullName)                                             

// global memory store in stack
// js also store the variable in the form of key value pair objects it is called as enviroment record


// what is hositing?
// code ko execute karne pahle yeah cheeze memory mein store ho rahi hain 
//  let's create a function expreession 

console.log(myFunc3)
var myFunc3  = function(){
    console.log("This is my function expresion ")
}
myFunc3();

// let's talks about hat happen int let and const case 
// 1. let  
// example : 
// console.log(namec); 
let namec = 'harshita';
// In the case of let matlab let banaya gya variable bana to jata hain but voh unintialised rahte 
// // if we will try to run the code throw an error . We should first intialished than access the values let  
//  thrown an error by interperter : uncaught ReferenceError: Cannot access 'namec' before initialization
// can do like this 
console.log(namec);


// 2. same for const 
// example : 
// console.log(namec2);
let namec2 ;
namec2 = "pnkaj"
// In the case of const matlab let banaya gya variable bana to jata hain but voh unintialised rahte 
// // if we will try to run the code throw an error . We should first intialished than access the values let  
//  thrown an error by interperter : uncaught ReferenceError: Cannot access 'namec' before initialization
// can do like this 
console.log(namec2);


// * par let and const ki hositing hot hain memory ke under par voh useless rahte hain until wr didn't intalished the values intoo the let and const 

// One more point 
// TDZ  = temporal dead zone 
// when the variable is unintialised but after certain time i have intintialised then in that unintialised time between intintialised
// we can say this method is TDZ

// Second types of code execution 
// Function execution context
// Javascript mein kabhi  function call hota hain toh uske  liya ek new exection context create that  EC is calledas functio executioncontext 
// It also works  with phase 
// 1. local memory phase
// 2. code execution/
// * arguments are an array like object but currently it is not exist 
// Example
let foo = "Foo";
console.log(foo);
function getFullName (firstname2 , lastname3) {
    console.log(arguments.length);
    let myvar = "Inside the func ";
    console.log(myvar)
    const FullName2 = firstname2 + " " + lastname3;
    return FullName2;
}
const personInformation = getFullName("Aayush" , "Chouhan");
console.log(personInformation);


// Lexical environment and scope chain 
// lexical = =jab humne code write kiya voh cheeze kah par present hain this is called lexical environment 

