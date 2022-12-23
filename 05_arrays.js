// Introduction of Array
// Array is reference type
//  odered collection of items
// In array can be stroe any type of data types
// Arrays are imutable
// my means is that array can changes original arrays elements using array methods
// But we are unable to do with string case

// let fruits=["Apple" , "banana" , "Grapes"];
// let number = [1,2,3,4,5,6];
// let mixNumber=[1,2,3,90.9, 56.67 , "Aayush" , null , undefined]
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(number)
// console.log(mixNumber)
// fruits[1]= "mango";
// console.log(fruits)
// let myName= "Aayush";
// console.log(typeof fruits);
// console.log(typeof myName);

// // If you are confusing about to reconised an array , then you
// // can use this function to check wheather is array or not
// // console.log(Array.isArray(fruits));

// Array methods
// push = Push function is used to  add an element in the last of the array
// fruits.push("kiwi");
// console.log(fruits);

// pop=pop function is used to  remove an element in the last of the array
// pop function remove karne ke saath mein hum return mein kuch de bhi rah uske saath kuch karo kahi bhi store karo
// let poppedFruits = fruits.pop() //can  be store in other varaiabes
// let popped2Fruits = fruits.pop();
// console.log(fruits.pop()); //can be check here your pop values
// console.log(poppedFruits)
// console.log(popped2Fruits)
// console.log(fruits);

// Unshift
// unshift is used to store values from starting of the Array
// fruits.unshift("banana", "Chickoo" ,"CustardApple");
// console.log(fruits)

// Shift
// Shift=Shift function is used to  remove an element in the starting of the array
// shift function remove karne ke saath mein hum return mein voh values bhi dega kuch de bhi rah uske saath kuch karo kahi bhi store karo
// let removedFruits=fruits.shift();
// console.log(removedFruits)
// console.log(fruits);
// Push and pop are faster than unshift and shift methods

// primitive and refernece data types
// let num1 = 9;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log("After increment values is");
// console.log(num1);
// console.log(num2);
// // As you can see that's After increment values changes only num1 but not change
// in  num2 beacuse computer memoery (stack) occupied two values first is num1 and 
// second is num2 after increment num1 change in the memory loaction but num2 
// remain same it dosn't change there

// reference types
// let array1=["item1", "item2"];
// let array2=array1;
// console.log(array1);
// console.log(array2);
// array1.push("Item 3");
// console.log("After adding the values noe tha output is :");
// console.log(array1)
// console.log(array2)
// watch  photos on mobile phone , to remeber it

// how to make array clone
// These method is not good for clone(copy od the array1 in array2) into array2
// let array1=["item1", "item2"];
// let array2=["item1", "item2"];
// // array1.push()
// console.log(array1)
// console.log(array2)

// There are 3 ways to clone array
// 1st Way
// using slice method we can clone it
// let array1=["item1", "item2"];
// // let array2= array1.slice(0);
// let array2= array1.slice(0).concat(["item 3" , "item 4"]);
// console.log(array1)
// console.log(array2)
// console.log(array1===array2)

// 2nd ways
// Using concate also done this
// let array1=["item1", "item2"];
// let array2= [].concat(array1 );
// let array2= [].concat(array1,["item 3" , "item4"] );
// console.log(array1)
// console.log(array2)
// console.log(array1===array2)

// 3rd ways
// spread operator
// Using spread operator also done array clone
// let array1=["item1", "item2"];
// // let array2= [...array1]  //to store array1 values into array2
// let array2= [...array1 ,"Item 3" , "item 4"] //Accept array1 values you wants to add more some
// //  values inside the array2 you can do like these in sperad operator
// console.log(array1)
// console.log(array2)
// console.log(array1===array2)
 
// Using for loop
// let fruits2 = [];
// let fruits=["Apple" , "banana" , "Grapes"];
// console.log(fruits)

// for (let index = 0; index < 1; index++) {
//     // fruits2.push(fruits[index].toUpperCase());
//     fruits2.unshift(...fruits,"kiwi" , "sweet");
//     // fruits2.unshift(fruits[index].toUpperCase());

// }
// console.log(fruits.length)
// console.log(fruits2)

// use const for creating array
const fruits = ["apple", "mangoes", "banana", "grapes"];
// console.log(fruits)
// // fruits =["Watermelon"] //In the constant case you cannot do like that , but you cam do in let case
// //but you can do with araay methods which is also true
// fruits.push("chickoo");
// console.log(fruits)
//(90% developer using const varaiable , so we should also trying to use const in array)

// while loop
// let i=0;
// let f=[];
// while (i< fruits.length) {
//     console.log(fruits[i].toUpperCase());
//     f.push(fruits[i].toUpperCase());
//     f.pop(fruits[i]);
//     i++;
// }
// console.log(Array.isArray(f));
// It's normal work done while same done with above using for loop

// for of loop in array
// So for of is almost similar to the tradition for loop , here there very few changes
// var f= [];
// for (let fruit of fruits) {
//     console.log(fruit .toUpperCase())
//     f.push(fruit .toUpperCase())
// }
// console.log(f);

// For in loop in array
// Similary for of almost but for of loops gives us elements present in array values , but for in
// gives a index values of the array
// for (let index in fruits) {
//     if (fruits[index] === "grapes") {
//         fruits[index] = "mango";
//     }
//     console.log(index , " = " , fruits[index]);
// }


// Array destructuring very important topic
// const myArray= ["Ankit","Shubham","Ankit","Janil"];
// let myName1=myArray[0];
// let myName2=myArray[1];
// let myName3=myArray[2];
// let myName4=myArray[3];
// console.log("myname1 is :" , myName1)
// console.log("myname2 is :" , myName2)
// console.log("myname3 is :" , myName3)
// console.log("myname4 is :" , myName4)
// In other programming languages we will do like that , but in javascript there is a shortcut let see now what

// Thses the shortcut and it is called as array destructuring
// let [myName1, myName2, myName3, myName4] = myArray;
// console.log("myname1 is :" , myName1)
// console.log("myname2 is :" , myName2)
// console.log("myname3 is :" , myName3)
// console.log("myname4 is :" , myName4)

// Mind round 
// In this case Number of  variables  avail so array automatically assign into the varaiable or according to the index values 
// let [myName1, myName2, ] = myArray;
// console.log("myname1 is :" , myName1)
// console.log("myname1 is :" , myName2)


// mind round 
// If n this case arrays vales is less than number of varaiable varaiable store undefined data types
// const myArray= ["Ankit","Janil"];
// let [myName1, myName2, myName3, myName4] = myArray;
// console.log("myname1 is :" , myName1)
// console.log("myname2 is :" , myName2)
// console.log("myname3 is :" , myName3)
// console.log("myname4 is :" , myName4)


// If you wants to suffle the values of arrray then you can do like these
// const myArray= ["Ankit", , ,"Shubham" ];
// let [myName1, myName2, myName3, myName4] = myArray;
// console.log("myname1 is :" , myName1)
// console.log("myname2 is :" , myName2)
// console.log("myname3 is :" , myName3)
// console.log("myname4 is :" , myName4)


// to store the remaining values of the array into new array you can do like this
// const myArray= ["Ankit","Shubham","Ankit","Janil"];
// let [myName1, myName2, ...myNewArray] = myArray;
// console.log("myname1 is :" , myName1)
// console.log("myname2 is :" , myName2)
// console.log(myNewArray)

// These method is also valid but it is a lengthy , so i,ll not reccomaneded for this 
// let myNewArray =[];
// myNewArray =myArray.slice(2);
// console.log(myNewArray)

// join method 



