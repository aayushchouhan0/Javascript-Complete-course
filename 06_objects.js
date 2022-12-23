// Object reference type
// Arrays are good but not sufficient
// For real world data
// Objects store key value pairs
// Objects doesn't have index
// / Inside the objects can be store array
// To access the key values of objects using dot

// How to create objects
// We will used for array square brackets but in objects we will use
// carli barckets
const person = {
  Name: "Aayush",
  Age: 19,
  Nickname: "Chintu",
  Hobbiess: ["Watching", "Wander", "Listening Music", "Football"],
};
console.log(person);
console.log(typeof person);
// It is also called as objects literals

// How to access data from objects
// console.log(person.Name);
// console.log(person.Age);
// console.log(person.Hobbiess[2]);

// To add some more kyevalues so do like that
person.gender = "Male";
console.log(person);
// person.emial = "ayushchouhan5568@gmail.com";
// console.log(person);


// What is bracket notation
console.log(person["gender"]);
console.log(person["Age"]);

// / To add some more kyevalues so do like that
person["gender"] = "female";
console.log(person);

// The difference between dot and bracket notation
// 1 Difference
// If your key names is doubles words , so you can do like this
const person2 = {
  Name: "Aayush",
  Age: 19,
  Nickname: "Chintu",
  "person Hobbiess": ["Watching", "Wander", "Listening Music", "Football"],
};
console.log(person2["person Hobbiess"]);

// 2 Difference
// To add some values into key do like this
const key = "Email";
person2[key] = "aayushchouhan5568@gmail.com";
console.log(person2);

const somebodayDetails = {
  myName: "Aayush",
  myAge: 19,
  myGender: "Male",
  myhobbies: ["lestening", "playing", "Danceing", "Watching"],
};

somebodayDetails["myAge"]  = 18;
// var key1 = "emial";
somebodayDetails["emial"] = "xyz.@gmail.com";
// console.log(somebodayDetails);

// / How to iterate objects
// First From for loops

// for (let key in somebodayDetails) {
//     console.log(somebodayDetails.key)
// }
// Do inf this way giving undefined beacuse we can't access the values of the objects using dot
// so we should ued square brakets
// for (let key in somebodayDetails) {
//         console.log(somebodayDetails[key]);
//     }

// To take both keys as well as values so should do like this again
// for (let key in somebodayDetails) {
//         console.log(key, " : " ,somebodayDetails[key]);
//     }

// There is also do with templates
// for (let key in somebodayDetails) {
            // console.log(`${key} : ${somebodayDetails[key]}`);
        // }

// Second from objects keys methods
console.log(typeof Object.keys(somebodayDetails));
let val = Array.isArray(Object.keys(somebodayDetails));
console.log(val);

// // So we know that this is an array so that we can apply here for of
for (let key of Object.keys(somebodayDetails)) {
  console.log(key, "  :  ", somebodayDetails[key]);
}

// // Computed property
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

// again computed property
const a = "obj";
const b = "obj2";

const values = "one";
const values2 = "one2";
const ot = {
  [a] : values,
  [b] : values2,
}
console.log(ot);


// Spread operator in objects
const obj1 = {
  key2: "value2",
  key1 : "Somethingunique", //overwrite the values of same keys
};
const obj2 = {
  key1: "Somethingunique",
  key3: "value3",
  key4: "value4",
};
const nuwObj = { ...obj2, ...obj1, key5: "value5" };
console.log(nuwObj);

// // Some Extraordinary trick in spread operator
// // Spread operator is good for find positions of values
// let obj7 = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(obj7);
// let obj8 = { ...["item1", "item2"] };
// console.log(obj8);

// // Destructuring in objects
const band = {
  bandName: "zed leppline",
  famousSong: "dtairway of HashChangeEvent",
  year: 1345,
  anotherSong: "kashmir ",
};
// To tekes values from objects like this
let {bandName , famousSong , year} =band;
console.log(bandName)
console.log(famousSong)
console.log(year)

// you wants to change keys name into another names like this
let { bandName: var1, famousSong: var2, year: var3 } = band;
console.log(var1);
console.log(var2);
console.log(var3);

// // Rest of the keys can be done using sperad operators
// let { bandName, famousSong, year, ...anotherSong } = band;
console.log(bandName);
console.log(famousSong);
console.log(year);
// console.log(anotherSong);

// objects inside array
const users = [
  { userId: 1, firstName: "Aayush", gender: "Male" },
  { userId: 2, firstName: "EKTA", gender: "female" },
  { userId: 3, firstName: "nitesh", gender: "Male" },
];
// for (let user of users) {
//     console.log(user);
// }

// // nested destructuring
// console.log("nested destructuring")
const [user1, user2, user3] = users;
console.log(user1)
console.log(user2)
console.log(user3)

// const [{firstName:var5}, {userId:var6}, ] = users;
// console.log(var5);
// console.log(var6);