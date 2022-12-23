// string indexing
// String is used to the collection of character that's ,makes string
// String can be assigned in doubles quotes as well as singal quotes 
// string also counts the space 
// strings are inmuutable 
let firstName="Aayush";
console.log(firstName);
// indexing values start from '0'
// A a y u s h
// 0 1 2 3 4 5 
console.log(firstName[5]);
console.log(firstName.length);
console.log(firstName.charCodeAt(5));

// methods of string
console.log("These are the string methods ")
let name1="Aayush Chouhan";
// lenght function is used to find the lenght of the given string 
console.log(name1.length);

let name2="    Aayush      ";
//As we know that strings are inmuutable so it doesn't changes the original strings but we can updates
console.log(name2.length)
// trim function is used to remove the space from a given string 
//  here, there is two also function available in a string related to the trim 
// mean starttrim(); which is trim only starting side of the string 
// mean endttrim(); which is trim only ending side of  the string
 name2=name2.trimEnd();
 console.log(" after the trimming the size of the string is " ,name2);
 console.log(" after the trimming the size of the string is " ,name2.length);

 let name3="aayush";
//  uppercase is used to upper all the character from lower character
 name3= name3.toUpperCase();
 console.log(name3);
 
 let name4="AAYUSH";
//  lowercase is used to Lower all the character from UPPER character
 name4= name4.toLowerCase();
 console.log(name4);

 let name5="Aayushchouhan";
//  slices function is used to slicing the string from starting index to ending index 
 name5=name5.slice(7, 13 ); //Aayushc give us
 console.log("Slicing the string ",name5);

//   there are also also type of slice string 
// 1. substring; = substring alomost similar to slice of the string 
// 2.substr; =  first is you should give starting index and how many  word you want print 
// into enter number 

// let myStory  = "You are very smart and clever boy mr aayush ";
// // myStory = myStory.substring(8,12);
// myStory = myStory.substr(-5);
// console.log("The substring is = " , myStory);


// replace method 
// Replace method is used to  replaced one word to another words
let str = "you and you both are boy";
// str = str.replace('you' , 'Aayush');
// console.log("the replacing values is :" , str);

// as you know that string are inmuatbale and case sensitive so for replacing if writing a 
// capital letter to seraching itwill throw the error

// console.log("the replacing values is :" , str.replace('YoU' , "aayush")); throw an error 
console.log("the replacing values is :" , str.replace(/YoU/i , "aayush")); //it is correct from
// in these case i writing to same word in a string but js replace  only first  word and second you remian unreplace so solution below
console.log("the replacing values is :" , str.replace(/you/g, "aayush")); 


// paddingg
// In js string you want to  add repeated thing multiples times you can use  pad makes to easy exmaples below 
// 1. startpad
// let n1= "7";
// console.log("the startpad is like this syntax = " , n1.padStart(5, 'x')); xxxx7
// 2. endpad
let n1= "5";
console.log("the startpad is like this syntax = " , n1.padEnd(5, 'x')); //5xxxx

// concatination of the string1
// you understand from his name conatctinate that's meant add the string with another stringh 
let t1 = "Hello";
let t2 = "World" ;
console.log(t1.concat(" beautiful " + " looking too cool " +  t2));
// ypu can use + operator and as  well as  , bot will work good


//  typeof operator
// data types 
/*
1.Number 2,3,4,5;
2.string="Aayush";
3.null
4.bigint
5.symbol
6.Undefined
7.booleans
deep discuss later on videos
*/

let age = 18;
let name_="Aayush";
// Typeof operators tells about the which type of data type is there
console.log(typeof age);
console.log(typeof name_);

// Typecasting In javascript 
// convert number to string 
console.log(typeof(age+"")) //it's converted into string

// convert string to number
let myStr="89";
// myStr =+myStr
myStr =+myStr
console.log(typeof(myStr)) //it's converted into number

// Another method to convert
let a=90;
a=String(a);
console.log(typeof(a));

let b="90";
b= Number(b);
console.log(typeof(b));

// concatination of the string
let string1="Aayush";
let string2 ='chouhan';
let fullName=string1 + " " +string2;
console.log(fullName)


// templates of the string
let aboutMe = `My name is ${string1} and my age is ${age} `
console.log(aboutMe)


 

