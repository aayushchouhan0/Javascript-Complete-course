// Very important events
// 1 Event bubbling or propagation  event
// 2. Event capturing
// 3. Event delegation

// bubble event is jab humne apne child element par koi event lagta hain
// or usse par koi action perform hota hain toh uske parent element mein check karta hain aagr unke
// parent element koi addEventListener add hain to voh usko bhi call kar deta hain and also for grandparent
// console.log("hello");
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click" , ()=>{
//     console.log("You clicked on child");
// })
// parent.addEventListener("click" , ()=>{
//     console.log("You clicked on parent");
// })
// grandparent.addEventListener("click" , ()=>{
//     console.log("You clicked on grandparent");
// })
// document.body.addEventListener("click" , ()=>{
//     console.log("You clicked on body");
// })

// Capturing event = jab hum capturing event bant hain toh sabse voh body check karega ki vha par
// koi addEventListener hain yeah aagr hain  console mein print hojayega after that grandparent and 
// check addEventListener same then parent and child follow same thing .it is opposite to the bubble
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capturing event  on child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capturing event  on parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capturing event  on grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capturing event  on body");
//   },
//   true
// );

// non capturing event =talks about bubble 
// child.addEventListener("click", () => {
//   console.log("You clicked on child");
// });
// parent.addEventListener("click", () => {
//   console.log("You clicked on parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("You clicked on grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("You clicked on body");
// });


// Event delegation 
// I'm adding addEventListener only grandparent 
// It is form a buuble 
const grandparent1 = document.querySelector(".grandparent");
grandparent1.addEventListener("click" , (e)=>{
    console.log(e.target.textContent);
})