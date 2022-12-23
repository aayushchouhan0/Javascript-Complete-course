const prompt = require("prompt-sync")();
// Completely cover about function
// very important topic coming now Function
// These function is called as function declartion
// function happyBirthday(){
//     console.log("Happy birthday to ypu.......")
// }
// happyBirthday();

// second function with parameters
// function addingTwoNumber1(a, b){
//     return a+b;
// }
// let number1 = +prompt("Enter the first number :");
// console.log(typeof number1);
// let number2 = +prompt("Enter the second number :");
// console.log("The sum of two numbers is : ",addingTwoNumber1(number1,number2))

// These is called function expression
// const addThreeNumber = function(a,b,c){
//     return a+b+c;
// }
// let number3 = +prompt("Enter the first number :");
// let number4 = +prompt("Enter the second number :");
// let number5 = +prompt("Enter the second number :");
// console.log(addThreeNumber(number3,number4,number5))

// Quick quiz
// function isEven(num1){
//     if (num1%2==0) {
//         console.log("Even");
//     }else{

//       console.log("odd");
//     }
// }
// let n1 = +prompt("Enter the numbers for checking wheater a nunber is even or odd : " );
// isEven(n1);

// function string
// function firstChar(anyString){
//    return anyString[0];
// }
// firstChar("Aayush");


// // array and target function
// function arrayTarget(array, target)
// {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// let arr1 = [23,56,45,67,89,90,87,67]
// let target1 = 89;
// console.log(arrayTarget(arr1,target1))

// Function arrow
// These is new type of function in JS

// If you are writing only one parameters in arrow function
// so you can removes pranthesis brackets from paramters
const printTable = (number1) => {
  for (let i = 1; i <= 10; i++) {
    console.log( number1 , "X" , i, "=", number1 * i);
  }
};
printTable(7);


// Creating a one more arrow function 
// let sumOfAllMultiSum = (num1) =>{
//   let sum =0 ;
//   for (let index = 0; index <= 10; index++) {
//      sum += num1*index;
//      console.log(num1*index);
     
//   }
//   return sum;
// }
// console.log(sumOfAllMultiSum(2));

// let twoNumMulti = (a, b) => {
//   return a * b;
// };
// console.log(twoNumMulti(4, 6));

// IF your return any values but it is in a one line so can remove curly braces
// like this
// let addingTwoNumber = (a, b) => a + b;
// console.log(addingTwoNumber(8, 9));

// Hoisting in function
// As you can see these thing is possible in javascript but only function declaration case
// you can't do with function exprssion and arrow function, you can check it if yoy wants see
// hello();
// function hello(){
//   console.log("hello World!");
// }

// // function inside function
// const aap = () => {
//   const hello = () => {
//     console.log("hello inside bro , how are you");
//   };
//   const myAdd = (num1, num2) => num1 + num2;

//   const myMulti = (num3, num4) => {
//     return num3 * num4;
//   };
//   console.log("Inside function is there ");
//   console.log(myMulti(4.567, 23.45));
//   hello();
//   console.log(myAdd(7.9, 90));
// }
// aap();

// Lexical function / lexical scope
// These is a newest function

// This is a lexical scope means is that if your globel mein toh function ko got kar lega 
// let myvar =  "value 1";
// function myApp() {
//   console.log( "You are inside myApp also function", myvar);

//   const myFunc = function () {
//     console.log("You are inside the myApp function ", myvar);

//     const myFunc2 = () => {
//       console.log("You are inside the myfunc function ", myvar);
//     };

//     myFunc2();
//   };
//   myFunc();
// }
// myApp();

// Block scoper vs function scope
// If you are using a block to making variables inside the block so can't that outside the 
// variables but can access inside  block  specially wehn you using let and const 
// let and const are block scope
// {
//     let firstName="Aayush chouhan";
//     console.log(firstName)
// }

// {
//     const firstName="Aayush chouhan";
//     console.log(firstName)   
// }
// const firstName ="garima";
// console.log(firstName)

// var are function scope
// But in the case of var variables you can use acce+ss throughout the block scope ,even yourvariavble 
// present inside and outside anywhwereaccess it
// const myFunc =() =>{
//     var firstname1= "Chintu"
//     if (true) {
//         console.log(firstname1);
//     }
//     if(true){
//         console.log(firstName)
//     }
//     console.log(firstname1)
// }
// myFunc();

// default parameters
// Before methods 
// function my_add (a,b){
//     if(typeof b === "undefined")
//     {
//         b=0;
//     }
// }
// console.log(my_add(2 , b=0));
// new method
// function my_Add(a, b=0)
// {
//     return a+b;
// }
// console.log(my_Add(9));

// Rest parameter
// function restPara(a,b,...c) {
//     console.log(`a is : ${a}`);
//     console.log(`b is : ${b}`);
//     console.log(`c is : `, c);
// }
// restPara(1,2,3,4,5,6,7,8,9,10);


// Quick quiz
// function addAll(...c){
//     console.log(c);
//     let sum = 0;
//     for (let c1 of c) {
//         sum+=c1;
//     }
//    return sum;
// }
// console.log(addAll(1,2,3,4,5,6,7,8));

// Parameter destructuring
// These is a noraml method 
// const person ={
//     firstName : "Aayush",
//     gender : "male",
// }
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person)

// destructuring Here
const person ={
    firstName : "Aayush",
    gender : "male",
}
function printDetails({firstName , gender}){
    console.log(firstName);
    console.log(gender);
}
printDetails(person)


// Call back function
function myfunc2(Name){
    console.log("you are hero of the func2")
    console.log(`you are my real heroes ${Name}`)
}
function myFunc(a){
    console.log("you are my callBack ");
    a("Aayush ");
}
myFunc(myfunc2)


// Function returing
function myfubc34(){
  return [123,45,678,56];
}
console.log(myfubc34())

// function , function ko bhi return kar sakte hain 

function myfubc34(){
  function hello(){
    return "Hello World!";
  }
  return hello;
}
const f1 = myfubc34();
console.log(f1());

