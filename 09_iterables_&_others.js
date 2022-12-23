// Iterables 
// Jispe hum for of loops laga sake in 
// Strings , array are iterables
// Examples 1. 
const firstName = "Aayush";
for (const char of firstName) {
    console.log(char)
}
// Examples 2.
const myArray = ["Aarry1", "array2","array3"];
for (const array of myArray) {
    console.log(array)
}

// Array like objects 
// jinke pass lenght property hoti hain aur jinko 
// hum index se access kar sakte hain  tey ar called as array like objects 
// Examples string 

// Set 
// Sets (It is a iterable)
// You can store different data types 
// Store Data
// Sets also have its own methods
// No index based - access
// Order is not guaranteed 
// Unique item only (no duplicates allow)
const number  = new  Set([1,2,3,4 ,5,6,7,8,9]);
number.add(76)
number.add(75)
number.add(78)
// I know you are thinking about it , we can't store duplicates values 
// but there is made two arrays and that arrays values has diferent memory address 
// so it is possible in set 
number.add(["item1" , "Item"])
number.add(["item1" , "Item"])
console.log( number ) 
// console.log(number[2]); //They throw error 
// has function in set to check a particular values avail or not inside set 
if (number.has(1)) { 
    console.log("1 is present ")
}else
{
    console.log("1 is not  present ")
}

for (const s1 of number) {
    console.log(s1);}

// We should used  set , when we an uniques values it's doesn't repeat agian and agian 
const myArray1 = [1,2,3,4,23,4,3,4,2,3,4];
const uniqueElements = new Set(myArray1);
console.log( "The unique values is : ",uniqueElements)
let length = 0; 
for (const s2 of uniqueElements) {
   length++;
}
console.log(length)

// Map Objects  
/* 
Note:
1.It is completely differents from map methods
2.Maps are iterable
3. store data in ordered fashion 
4. store key value pair (like object)
5.duplicates keys are not allowed (like objects) 
6.different between maps and objects 
i. Object ke under hume key values string or symbols rakhte hain, par in map humne koi keys 
values rakhe sakte hain like number , string , array etc
ii . Objects ke under for in loop laga sakte hain par for of loop nahi , 
par Map ke under for of loops laga sakte hain because map are iterable
7.Objects can only have string and symbol
8.as key
9.In maps you can use anything (like number , array , string)
*/

// Objects literals 
// key ---> always string 99.99% use it
// key ---> symbol
// const person = {
//     firstName : "Aayush",
//     age : 19,
//     1 : "one", //1 is also string 
// }
// console.log( typeof person[1])

// Map Examples
// const person = new Map();
// person.set("firstname" , "Aayush");
// person.set("Age" , 12);
// person.set(1 , "One");
// person.set([1,2,3,4] , "Numbers");
// person.set({"Something " : "Singh"} , "Numbers");
// person.set ("Number" , 9664406912);
// console.log(person.get("firstname"));
// console.log(person.get(1));
// console.log(person.get([1,2,3,4]));
// // console.log(person.keys());
// for (const [key ,value] of person) {
//     console.log(key , value)
// }

// These is a very good method to set maps key values 
// const p1 = new Map([["firstName" , "Aayush"] , ["Age" , 19]]);
// console.log(p1)

// const client = {
//     clientId : 1,
//     clientName :"Aayush"
// }
// const client2 = {
//     clientId : 2,
//     clientName :"Aayush2"
// }
// const extraInfo = new Map();
// extraInfo.set(client , {Age : 9 , gender : "Male"})
// extraInfo.set(client2 , {Age : 29 , gender : "2Male"})
// // console.log(extraInfo)
// console.log(client.clientId)
// console.log(extraInfo.get(client).Age)
// console.log(extraInfo.get(client2).Age)

// Clone using Object.assign 
// memory 

// const obj1 =  {
//     key1 : "value1",
//     key2 : "value2"
// }
// // const obj2 = {...obj1} newest method to cloneing 
// const obj2 = Object.assign({} , obj1) //oldest method to cloneing 

// obj1.key3 = "Value 3"
// console.log(obj1)
// console.log(obj2)


// Optional changing 
// const user  = {
//     firstName : "Aayush",
//     // Address : {houseNumber: "1234"},
// }
// // ? ka matlab hain aagar voh exits karta hain to aage bade varna 
// // undefined de hume  it's not gives error 
// console.log(user.firstName);
// console.log(user?.Address?.houseNumber);


// Create your own method 
// Function indise objects 
// this keyword code likhte hua nahi pata chalta hain run code karna  pe pata chalta
// Any function inside object it is called object  
// function Moreinfo() {
//     console.log(`person name is ${this.userName} and age ${this.userAge}`)
// }
// const person ={
//     userName : "Aayush",
//     userAge : 18,
//     moreAbout : Moreinfo
// }
// const person2 ={
//     userName : "Laxmi",
//     userAge : 28,
//     moreAbout : Moreinfo
// }
// const person3 ={
//     userName : "Pankaj",
//     userAge : 58,
//     moreAbout : Moreinfo
// }
// const person4 ={
//     userName : "Nitish",
//     userAge : 8,
//     moreAbout : Moreinfo
// }
// person.moreAbout();
// person2.moreAbout();
// person3.moreAbout();
// person4.moreAbout();

// This keywords
"use strict "
const myFunc = function (){
    console.log(this)
}
myFunc();
// Window.myFunc(); iss pe humne window objects milenge 

// now , we are going teach very important thing 
// call , apply , bind methods 

/* 
Call 
1.Call method is used to give any this values like user1 and user2 , there will print it 
// Apply method is alomt similar to the Call method  in that we gives some extra arguments 
we can give together 
bind method return the values into a new function 
 */
// function about (hobby , favMusician){
//     console.log(this.firstName , this.age ,hobby , favMusician)
// }
// const user1 = {
//     firstName : "Aayush",
//     age : 19,
// }
// const user2 = {
//     firstName : "Mohit",
//     age : 39,
// }
// // about.call(user2 , "singing" , "Arijit singh ") 
// // about.apply(user2 ,[ "singing" , "Arijit singh "]) 
// const func = about.bind(user2 , "singing" , "Arijit singh ") 
// func()

// Small warning 
// don't do this  mistakes  
// const f2 = user1.about.bind(user1);
// f2();

// Arrow function  in this keyword case 
// Arrow function this nahi hota matlab iska khud ka this nahi hota Haoin 
// voh apne surrounding se leta hain 
// Arrow function ka this ek level upper hota hain 

// const user1 = {
//     firstName : "Aayush",
//     age : 19,
//     about(){
//         // console.log(this)
//         console.log(this.firstName , this.age);
// }
// }
// user1.about();

// Create function to Create multiple objects 
// Function(That function create objects )
// 2.) add key values pair 
// 3.) object ko return karega 
// function Createuser(firstName, lastname, email , age, address) {
//     const user ={}    
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function (){
//         return `${firstName} is ${age} year old you `
//     }
//     user.is18 = function(){
//         return age>=18;
//     }
//     return user;
// }
// const userInfo =Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 14,"ganeshpura ratanada jodhpur ")
// console.log(userInfo)
// const about =  userInfo.about();
// console.log(about)
// const is18 =  userInfo.is18();
// console.log(is18)
// There is a lot of mistakes in this code , so we solving the problem 
// Solution 
// What is problem of  that question  , if we wants to store million amount of the data
// user data so no doubt we will same method key about and is15 methods both are 
// takes new space we create a user so that makes more memory space so convient mode is 
// about and is18 makes separte object 
// const userMethods = {
//     about : function (){
//         return `${this.firstName} is ${this.age} year old you `
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }
// function Createuser(firstName, lastname, email , age, address) {
//     const user ={}    
//     user.firstName = firstName;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 14,"ganeshpura ratanada jodhpur ")
// const user2 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 24,"ganeshpura ratanada jodhpur ")
// const user3 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 34,"ganeshpura ratanada jodhpur ")
// const user4 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 44,"ganeshpura ratanada jodhpur ")
// console.log(user1 , user1.about() , user1.is18())
// console.log(user2 , user2.about() , user2.is18())
// console.log(user3 , user3.about() , user3.is18())
// console.log(user4 , user4.about() , user4.is18())

// But still one more mistakes is there 
const obj1 = {
    key1 : "value",
    key2 : "value2",
}
// mein chhata hu ki aagr mera obj22 se obj1 li keys values ko asscess karna chaata 
// toh mein kuch asie asie methods kar sakte hu 

// __proto__
// Ecamscript documentation
// [[prototype]]
// __proto__ , [[prototype ]]
const obj22 = Object.create(obj1)
    obj22.key3 = "value3",
    obj22.key4 = "value4",

// console.log(obj22.key2)
// obj22 ka proto obj1 hoga 
console.log(obj22.__proto__) 

// Third problem solution 
const userMethods = {
    about : function (){
        return `${this.firstName} is ${this.age} year old you `
    },
    is18 : function(){
        return this.age>=18;
    }
}
function Createuser(firstName, lastname, email , age, address) {
    const user = Object.create(userMethods)   
    user.firstName = firstName;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    return user;
}

const user1 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 14,"ganeshpura ratanada jodhpur ")
const user2 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 24,"ganeshpura ratanada jodhpur ")
const user3 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 34,"ganeshpura ratanada jodhpur ")
const user4 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 44,"ganeshpura ratanada jodhpur ")
console.log(user1.__proto__ , user1.about())
console.log(user2.__proto__ , user2.about())
console.log(user3.__proto__ , user3.about())
console.log(user4.__proto__ , user4.about())
