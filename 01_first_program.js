// Use strict is a modules in javascript to make save from mistakes , if You got any error there will show in your terminal 
"use strict";
console.log("Hello World!");

// What is comment in Js
/* Comment is very imortant part for every programming languages to describe about the program or 
for our convienece to understand easily by the other programmer to check code
There are two types of comment in js 
1. Singal line comment 
2. multiple line comment 
There is a shortcut of comment is  ctrl+ forward slash
*/

// Into variables
// variable is  used to store any kind of things like, In kitchen We store grocery items in a container like dal , rice , wheat 
// , similarly javascript var is used to store the values , and values may be any datatypes
// Var is a keyword in javascript 
// Variable names are case sensitives 

// Examples
var firstName="Aayush Chouhan"; //It is also called as camesl case writing
//String can be writes in double quotes or singal quotes both will work
console.log(firstName);

// After decalring var to store tha values in inside the FirstName var, so you can dyanmically changes that values in a running program
// Without use other var keyword
firstName="Mohit singh";
console.log(firstName);

// rules for naming varibles 
// You can't start with numbers
// Examples 
// 1Aayush(Inavid)
// var 1Aaayush =90;
// Aayush1(It is valid )
var Aayush1 =90
console.log(Aayush1)

// You can use only underscore and dollar 
// First_name(valid)
var First_name= 5; //It is  called as snake case writing
console.log(First_name **2);
// _firstname(Valid)
var _Firstname= 5;
console.log(_Firstname **3);

// You cannot use space
// First name(invalid)
// var first name= 90;

// convention
// start with small letters and use camel Name

// let keyword
let sureName= "Singh Sahab"
console.log(sureName);
/* 
The major difference between var and let keyword
1. var can cahnge values after declaring at once time similarly same things do with let , there will be no effect occured
like this 
var name="Aayush";
var name="Ankit";
There will no give any error 
2. You can decalre multiples times in var but you couildn't do with let with same identifier 
like this 
// let name= "aayush"
// let name="Ankit ";
there wiil throw the error 
*/

let fatherName="something i don't wants to reavel here";
console.log(fatherName)

// Declaring const
// Constant does'nt changes the values during the program execution  they always fixed 
// like pie values is 3.14  its is constant never can changed
// But can do other works with const values 

const pi=3.14;
console.log(pi);