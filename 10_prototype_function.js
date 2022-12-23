//  What is prototype 
 function hello(){
    console.log("hello world !")
 }
hello();
// Javascript function ===> it is a combination of Function + Object 
console.log(hello.name) //tells the name of the function 
// You can add your own properties 
hello.myOwnProperty = "Very Unique surname ,";
console.log(hello.myOwnProperty)
// Function provides more useful property 
// prototype ek free space hain jo function ke saath hi aata hain
// or kahi pe nahi milte hain , or isko ek blank object tara treat karna 

// Only Functions provdies prototype property 
console.log(hello.prototype) //{}


// How to use prototype , beacuse function free space this called prototype 
// if you don't  wants to create objects so you can use prototype along with function
// let's see how it is work
// const userMethods = {
//    about : function (){
//        return `${this.firstName} is ${this.age} year old you `
//    },
//    is18 : function(){
//        return this.age>=18;
//    }
// }

// function Createuser(firstName, lastname, email , age, address) {
//    const user = Object.create(Createuser.prototype)   
//    user.firstName = firstName;
//    user.lastname = lastname;
//    user.email = email;
//    user.age = age;
//    return user;
// }

// Createuser.prototype.about = function (){
//           return `${this.firstName} is ${this.age} year old you `
//       };
// Createuser.prototype.is18 = function(){
//           return this.age>=18;
//       }
   
// const user1 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 14,"ganeshpura ratanada jodhpur ")
// const user2 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 24,"ganeshpura ratanada jodhpur ")
// const user3 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 34,"ganeshpura ratanada jodhpur ")
// const user4 = Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 44,"ganeshpura ratanada jodhpur ")
// console.log(user1, user1.about() , user1.is18())


// new keyword 
// function userDetails(name, agePerson , mob) {
//    this.name = name;
//    this.agePerson = agePerson;
//    this.mob = mob;
// }
// userDetails.prototype.tell = function () {
//    console.log("Hpw are bro how is it going your lifve ")
// } 
// const userSomethings =  new userDetails("harshita ", 89 , "1234567890");

// console.log(userSomethings )

// Three very important point about new keyword
// 1.) new keyword create a empty object using  this = {}
// 2.) return this voh objects returns again\
//  3.) can also use prootype 


// These method implement with same eg
function Createuser(firstName, lastname, email , age, address) {
   this.firstName = firstName;
   this.lastname = lastname;
   this.email = email;
   this.age = age;
   
}

Createuser.prototype.about = function (){
          return `${this.firstName} is ${this.age} year old you `
      };
Createuser.prototype.is18 = function(){
          return this.age>=18;
      }
   
const user1 = new Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 74,"ganeshpura ratanada jodhpur ")
const user2 = new Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 24,"ganeshpura ratanada jodhpur ")
const user3 = new Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 34,"ganeshpura ratanada jodhpur ")
const user4 = new Createuser("Aayush" , "Chouhan", "ayushchouhan5568@gmail.com" , 44,"ganeshpura ratanada jodhpur ")
console.log(user1, user1.about() , user1.is18())

// very important points
// --proto--
// and prototype both are same but different only browser support 
// constructor function 
// new keyword  app use kar rah ho to hume usse variable ka naam first letter capital lakhna hota just 
// for conveient for developers 



// hasOwnProperty
// it's give true and false 
// Aagr hum prototype ko nahi dikhne chata hain toh as key values so we can use this function 
for (const key in user1) {
   if (user1.hasOwnProperty(key)) {
     console.log(key)
   }
}

// more about javascript 
// let number = [1,2,3];
let number = new Array(1,2 ,3, 4,5)
console.log(Object.getPrototypeOf(number))
console.log(Array.prototype)
console.log(number)

// if you are are working in array so your prototype will be array type 
// if you are are working in function so your prototype will be objects  type 