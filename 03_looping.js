// let num1 =0 ;
// while (num1<=9) {
//     console.log(num1);
//     num1++;
// }
// First 10 natural number sum 
// While loop is called as infinite loofp , that's mean until the condition is not false loop getting run
// let number = 0;
// let total = 0;
// while(number<=10)
// {
//    total=total+number;
//    number++;
// }
// console.log(total);


// intro for for loop
// If we are using let in for loop , you can access outside of the loop body 
// But you can do with var access anywhere .
// Also declare like this also

for (let i=1; i <= 10; i++) {
   console.log(i);

}
// console.log(i);

// First 10 natural number sum
let total_1=0;
for ( let index = 0; index <= 10; index++) {
   total_1+=index
}
console.log("The sum of natural number is :" , total_1);


// Break and continue keyword
// break
for (let index = 0; index <= 10; index++) {
   if (index===4) {
      break;
   }
   console.log(index);
}


// Continue
for (let index = 0; index <= 10; index++) {
   if (index===4) {
      continue;
   }
   console.log(index);
}

// Do-While loop
let i=0;
do {
   console.log(i);
   i++;
} while (i<=10);