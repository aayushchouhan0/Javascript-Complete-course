const prompt =require("prompt-sync")();
// QUESTION 1
const studentsDetals={
    studentName : "Aayush Chouhan",
    phoneNumber : 9664406912,
    totalMarks : 300/600 + " CEGP ",
}
console.log(studentsDetals);

// Question 2
// let myAge = prompt("Enter your age : ");
// myAge = Number.parseInt(myAge)
// if (myAge>=10 && myAge<=20) {
//     console.log("Your age is lying between 10 to 20 ");
// }
// else{
//     console.log("Your age is more  than 20 ")
// }

// Question 3
// let month = +prompt("Enter the month number ");
// console.log(typeof month)
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("Sep");
//         break;
//     case 10:
//         console.log("oct");
//         break;
//     case 11:
//         console.log("november");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Sorry, you entered wrong  number");
//         break;
// }
// Question 4
// let myNumber = Number(prompt("Enter the number"));
// if (myNumber%2 === 0 && myNumber%3 === 0) {
//     console.log("yes, Number  these is divisible by both");
// } else {
//     console.log("No,  Number these is not divisible by both");
// }


// Question 5
// let myNumber = Number(prompt("Enter the number"));
// if (myNumber%2 === 0 ||  myNumber%3 === 0) {
//     console.log("yes, Number  these is divisible by both");
// } else {
//     console.log("No,  Number these is not divisible by both");
// }

// Question 6
// let myAgeCheck = +prompt("Enter the age");
// let myAgeDrive = (myAgeCheck >= 18)? "Yes, you can drive":"No, you can't drive";
// console.log(myAgeDrive)

// Question 7
// let userNumber = +prompt("Enter the number for guessings");
// let luckyNumber = 25;
// if(userNumber === luckyNumber )
// {
//     console.log("Wow , your guessing is  right")
// }
// else
// {
//     console.log("sorrow , your guessing is  wrong")
// }

// Question 8
// let myName = "Aayush 's Chouhan";
// console.log(myName)
// console.log(myName.length);


// Question 9
// let string1 = "These  is  your pen";
// console.log(string1.startsWith("T"));
// console.log(string1.endsWith("n"));


// Question 10
// let letter ="Please gives 1000 Rs";
// let letter1 =`Your amount will be give after taking money. ${letter}`;
// console.log(letter1);

// Question 11
// let checkingSentence = "Aayush Chouhan";
// console.log(checkingSentence);
// checkingSentence[3] = 's';
// console.log(checkingSentence)
// // Beacuse strings imutable

// Question 12
// let array1 =[];
// let promt =5;
// sum =0 ;
// for (let i = 0; i <= promt; i++) {
//     let input = +prompt("Enter the number");
//     array1.push(input)   ;
// }
// console.log(array1)
// for (let index = 0; index <= 5; index++) {
//     sum = sum + array1[index];
// }
// console.log(sum);


// Question 13
// let array1 =[];
// let  a ;
// do {
//         a = +prompt("Enter the number");
//         array1.push(a)   ;
// } while (a!=0);
// console.log(array1)

// Question 14
// let array1 =[];
// let array2= [];
// let promt =10;
// for (let i = 0; i < promt; i++) {
//     let input = +prompt("Enter the number");
//     array1.push(input)   ;
// }
// console.log(array1)
// for (let index = 0; index < array1.length; index++) {
//     if (array1[index]%10 == 0) {
//         array2.push(array1[index]);
//     }
// }
// console.log(array2)

// Question 15
// let array1=[];
// let array2 = [];
// let a;
// for (let index = 0; index < 10; index++) {
//     a=+prompt("Enter the numbers for squaring:");
//     array1.push(a);
//     array2.push(array1[index]**2);
// }
// console.log(array1)
// console.log(array2)


console.log("Your random number is generated here see below :")
let random = +Math.floor(Math.random() * 100);
let score = 100;
let myNumber;
while (myNumber !==  random) {
    score = score-1
     myNumber = +prompt("Enter the guessing number:");
    if (random === myNumber) {
        console.log("Your gusseing is correct , you are winner ")
        console.log(`Your gussesin is actual number is ${100-score} chance`)
    }
    else if (random>myNumber && myNumber<100) {
        console.log("Your gusseing Number is greater than your random number")
    }
    else if (random < myNumber && myNumber>0) {
        console.log("Your gusseing  Number is smaller  than your random Number ")
    }
    else{
        console.log("please enter again")
    }
}
 