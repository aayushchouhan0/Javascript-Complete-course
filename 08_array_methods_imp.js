// Some very important array methods
// ForEach
// These question is a practice purpose

// const numbers1 = [1,2,3,4,5,6,7,8];
// function arrayElementsBy2(){
//     for (const array1 of numbers1) {
//         console.log("Aarrys index values is :" , (array1 -1));
//     console.log(`The multplication of this number is : ${array1}*2 =  ${array1*2}`);
//     }
// }
// arrayElementsBy2();

// confusing between parameters and arguments
// when we define or create the function so they are called parameters
// when we calls the values from function to takes as values in function it is called as arguments
// anonymous function = those function which doesn't have any their function name are called it

// forEach Exmaples
// ForEach cannot gave a new array while map methods always gives a new array
// const number1 =[2,4,6,8,10,14,16];
// function arrayElements(number , index){
//     console.log("The index values is :" , index)
//     console.log("The multiplication of twos number is :" , number*2)
// }
// number1.forEach(arrayElements);

// Quick Quiz

// const myResultMarks = [80,93,67,45,74,56];
// let sum =0;
// let percentage = 0;
// myResultMarks.forEach(function resultsDetails(number ) {
//     sum = sum + number;
//     percentage = (sum /600) *100;

// })
// console.log("The sum of all marks is " , sum );
// console.log( percentage)

// // Realtime using forEach
// const users =[
//     {firstName : "Aayush" , age : 19,},
//     {firstName : "Mayank" , age : 19,},
//     {firstName : "jugal" , age : 19,},
// ]
// users.forEach((user , index) => {
//     console.log(user.firstName , user.age , index)
// })

// Map method in Aarry very important method
// First things map function always return new array
// Second = Map function always made a new array
const numbers = [2, 5, 7, 4, 6, 8];


// function defination
// function mySquare(number){
//     return number**2;
// }
// const squareNumber = numbers.map(mySquare);
// console.log(squareNumber);



// Function Expression
// const mySquare = function(number){
//     return number**2;
// }
// const squareNumber = numbers.map(mySquare)
// console.log(squareNumber)


// Arrow function
// const squareNumber = numbers.map(number => {
//     return number **2;
// })
// console.log(squareNumber);

// Filter method
// First things filter function always return Boolean
// and store  into  a new array below exampls here please checkout
// const num1 = [3,5,2,6,8,9,6,3];
// const isEven = function(n){
//     return n%2===0;
// }
// const evenNumber = num1.filter(isEven);
// console.log(evenNumber)

// const num1 = [3,5,2,6,8,9,6,3];
// const evenNumber = num1.filter((n1) => {
//     return n1%2===0
// });
// console.log(evenNumber)

// Reduce Method
// very important function
// onlytakes two parameters
// Also set accumulator values
// const num2 = [1, 2, 3, 4, 5, 6];
// const sum2 = num2.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log("The sum of accumulator and current  " ,sum2);

// accumulator    currentvalues    return
// 1                   2               3
// 3                   3               6
// 6                   4               10
// 10                  5                15
// 15                  6                 21


// const userCart = [
//     {productId: 1001, productName: "Mobiles" , product : 12500,},
//     {productId: 1002, productName: "Appliances" , product : 35500,},
//     {productId: 1003, productName: "laptops" , product : 50000,},
//     {productId: 1004, productName: "Tv" , product : 15500,},
// ]
// const totalAmount = userCart.reduce((totalPrice , currentPrice)=>{
//     return totalPrice+currentPrice.product;
    
// } , 0)
// console.log(totalAmount)
// Some Notes
// 1. i was set the values of taotalPrice intiallly is 0


// Sort methods
// To arrange in the  order of ascending order
// In the case of ForEach , reduce,filter,map that's all methods does not makes any
// any impacts on array,  but in sort method  array are mutable  means its change
// original array

const sortNumber = [3, 690, 678, 4567, 345];
const userName = ["ankit", "jugal", "janil", "navneet", "ABC", "HTD"];
// According the ASCII code numbers hass decided
// 3 = 51 , 6=54, 4 =52
// Notes : 1. Sort methods are changes in original array
// 2. It's work according to the ASCII code
// 3. Every number written inside the array treat like a string and compare w
// with ASCII code and then arrange in ascending order
// 4.They check first character of the ASCII Code
sortNumber.sort();
console.log(sortNumber);
// It's work well with string
// And if in  your array given any capital charcter , so there will sort first according to ASCII code
userName.sort();
console.log(userName);

// so What is the solution that with numbers
// const integers = [450, 34, 56, 32, 45, 32];
// integers.sort((a, b) => {
//   return a-b;// for ascending order
//   // return b - a; // for desending order
// });
// console.log(integers);
/*

Explantion here 
// 450 =a ,34 =b
a-b ---> 414 
a-b --->(greater than 0) ---> b,a so pahle b dega then a dega 
34,450

34 =a, 56 = b
a-b ---> -20 (lesser than 0) ---> a,b so pahle a dega and fhir b dega 
34,56
*/

// const product2 = [
//    {productId :1 ,  price: 500,} ,
//    {productId :2 ,  price: 5500 , } ,
//    {productId :3 ,  price: 8500 , } ,
//    {productId :4 ,  price: 3500  , } ,
//    {productId :5 ,  price: 6500  , } ,
//    {productId :6 ,  price: 100  ,} ,
// ];
// // lowtohigh
// const lowToHigh = product2.slice(0).sort((a,b) => {
//     return a.price - b.price;

// })
// const HighToLow = product2.slice(0).sort((a,b) => {
//     return b.price - a.price;

// })
// console.log(HighToLow );
// console.log(lowToHigh );

// find Method
// So there will check the condition and find the given true values
// And if they find true condition in first ocurrence there will print
// const myArray = ["Hello", "Catt", "Dogy", "Fox", "Chintu"];
// function isLenght3(string) {
//   return string.length === 3;
// }

// const ans = myArray.find(isLenght3);
// console.log("Checking the condition here:" ,ans);

// const users1 = [
//   { userId: 1, userName: "Aayush" },
//   { userId: 2, userName: "Mohit" },
//   { userId: 3, userName: "Ankit" },
//   { userId: 4, userName: "Tushar" },
//   { userId: 5, userName: "Pankaj" },
// ];
// const Myuser1 = users1.find((id) => {
//   return id.userId === 5;
// });
// console.log("Checking the condition here:" , Myuser1);


// Every method
// Call call back function returns only true and false values or boolean type
// Similary Every method also returns boolean types
// there will being going until the condition is not false
// If once time condition  got falsed  every stopped there
//  and give false in the output
const myNumbers = [2, , 4, 6, 8, 10];
const wheaterCheck = myNumbers.every((numbers) => {
  return numbers % 2 === 0;
});
console.log( "Every method :" ,wheaterCheck);


// // Realistic examples
const product3 = [
       {productId :1 ,  price: 500,} ,
       {productId :2 ,  price: 5500 , } ,
       {productId :3 ,  price: 8500 , } ,
       {productId :4 ,  price: 3500  , } ,
       {productId :5 ,  price: 65000  , } ,
       {productId :6 ,  price: 100  ,} ,
    ];
   const pt1 =  product3.every((itemCart) => {
        return itemCart.price <=30000;
    })
    console.log("Every method :",pt1);

// Some methods
// Let's check if it is find  atleast one even  number
// Gives true
const MyNum = [3, 6, 7, 9, 89];
const ans1 = MyNum.some((num1) => num1 % 2 === 0);
console.log("Find method ",ans1);

// Realistic examples
// const product = [
//   { productId: 1, price: 500 },
//   { productId: 2, price: 5500 },
//   { productId: 3, price: 8500 },
//   { productId: 4, price: 3500 },
//   { productId: 5, price: 65000 },
//   { productId: 6, price: 100 },
// ];
// const pt = product.some((itemCart) => {
//   return itemCart.price > 500000;
// });
// console.log(pt);


//  fill methods
// And it's change original array In these methods arrays are mutable
// First way
const myArray3 = new Array(10).fill(0);
console.log(myArray3);

// Second methods
const myArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 56];
// Value = Voh values jise ap fill karna chhate ho
// Starting index values of the array
// Ending index values of the array
console.log(myArray4.fill(-1, 9, 12)); 
// -1 = filling item u want fill it
// 9 = starting index 
// 12 = ending index n-1;
// splice methods
// starts  delete insert
// To delete something between array or insert beween array
const myNum6 = ["Items1 ", "items2", "iteam 3", "iteam 4" ,"item 5","item 6","item 7"];
//1.  Delete
// Jiseko delete karan hain uska starting index likha jayega
// 2 = starting strting index 
// 3 = how much Element u wanns to delete 
// myNum6.splice(2 );
// console.log(myNum6)

// insert
myNum6.splice(2, 0,"inserted something");
console.log(myNum6)

// Insert and delete both
myNum6.splice(2, 1, "inserted something");
console.log(myNum6);
