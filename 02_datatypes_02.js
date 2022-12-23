const prompt =require("prompt-sync")();
// undefined
let firstName;
console.log(typeof firstName)
firstName = "harsita";
// When you create the variables but doesn't assign any values inside it
// there will be undefined data types. but we can do with let and var keywaord, but can't do with const beacuse you should assigne some values , otherwise there will throw error
console.log(typeof firstName , firstName)

// null
let myVariable = null;
console.log(typeof myVariable);
myVariable="aayush";
console.log(myVariable , typeof myVariable)
console.log(typeof null);
// it's a bug , error 
// Javascript developers can't resolve this bug right now, beacuse
// many conpamies writing the thousand lines code and also made a framesworks using null datatypes , so they will be change all things . 

// BigInt
// BiGint is used to store too large number, but as well as we can used with small numbers and perform any operation 
let mynumber = BigInt(1234);//can do that
let mySaveNumber=23n; //also can do that
console.log(typeof (mynumber+mySaveNumber))

// == vs ===
let num1=10;
let num2= '10';
//because it is showing true means values is same but data types is
//  not same  == always checked only values does'nt matter which have data types///
console.log(num1 == num2)
//because it is showing false means values is same but data types is
//  not same  === always checked both things values and data types 
console.log(num1 === num2)

// != vs !==
console.log(num1 != num2)
//because it is showing true means values is same but data types is
//  not same  != always checked only values does'nt matter which have data types///
console.log(num1 !== num2)
//because it is showing false means values is same but data types is
//  not same  !== always checked both things values and data types 

// falsey values
// false
// ""
// undefined
// null
// 0

// truthy values
// "abc"
// +1,-1

// here some explaes to check above values 
let name1= null
if (name1) {
    console.log(name1);
}else
{
    console.log("Empty string");
}

// ternary operator / conditional operator
let age = Number(prompt("Enter the number :"))
console.log(typeof age);
 let drive = (age>=18) ? "yoy can drive now " : "you can't drive";
 console.log(drive)