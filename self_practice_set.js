// Question 1
// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday" , "Monday" ,"Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let currentDay = daylist[day];
// var date = today.getDate();
// var month = today.getMonth();
// var monthList = ["Jan", "feb" ,"march" , "April", "May" , "June" , "July" ,"August" , "Sep" , "Oct", "Nov" , "Dec"];
// var currentMonth = monthList[month]
// var year = today.getFullYear();
// console.log("Today date and day is = " ,date , "/", currentMonth , "/", year , "  " ,currentDay );
// var hour = today.getHours();
// var t1 = (hour>11 )? "Pm": "Am";
// hour =   (hour>12)? hour-12: hour;
// var minutes = today.getMinutes();
// var second = today.getSeconds();
// var milli_sec = today.getMilliseconds();
// console.log("Time is :" , hour ," :",minutes , ":" , second , " ", t1);

// // Question 2
// function printPages(){
//     window.print();
// }


// Question 3
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth();
// var yyyy = today.getFullYear();
// if (mm<10) {
//     mm= '0'+mm;
// }
// if (dd<10) {
//    dd ='0'+dd; 
// }
// console.log(currentMonth , "-" , dd ,"-" , yyyy);
// console.log(currentMonth , "/" , dd ,"/" , yyyy);
// console.log(dd , "-" , currentMonth ,"-" , yyyy);
// console.log(dd , "/" , currentMonth ,"/" , yyyy);

// Question 4
// let side1 = 5;
// let side2 = 6;
// let side3 = 7;
// let  totalSides = (side1+side2 +side3)/2;
// let area = Math.sqrt(totalSides*((totalSides-side1)*(totalSides-side2)*(totalSides-side3)));
// console.log(area)


// Question 5

// const checkingLeap = year => {
//     if (year%4===0)
//      {
//         console.log(`${year} This year is a leap year`)
//     }
//     else{
//         console.log(`${year} This year is not a leap year`)
//     }
// }
// const prompt =require("prompt-sync")();
// let y = +prompt("Enter the year :");
// checkingLeap(y);

// Question 6
// for (let year = 2014; year <= 2050; year++) {
//    var dd1  = new Date(year, 0,1);
//    if (dd1.getDay() === 0 ) {
//     console.log("1st january  being a sunday :" , year);
//    }
// }

// Question 7
// var  r1 = Math.floor(Math.random() * 100);
// console.log(r1);
// var score = 100;
// while (r1 !== num1) {
//     score-= 1
//     var num1 =   +  prompt("Enter the guessing number:");
//     if (num1 === r1){
//         console.log("Great work bro");
//         console.log(`Your score will be ${score}`)
//     }
//     else {
//         console.log("sorry, try next time miss match ")
//     }  
// }

// Ouestion 8
// function Multiply(){
//     num1 = document.getElementById("Firstnumber").value;
//     num2 = document.getElementById("secondnumber").value;
//     document.getElementById("result").innerHTML= num1 * num2;
// }
// function Addition(){
//     num1 = document.getElementById("Firstnumber").value;
//     num2 = document.getElementById("secondnumber").value;
//     document.getElementById("result").innerHTML = num1 / num2;
// }

