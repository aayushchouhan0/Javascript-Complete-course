// Basic theory

// AJAX = asynchronous  javascript and XML

// Our moto to request HTTP(hyper text transfer protocol)
// It is a set of "Web development" techniques
// using many web technologies on the "client -side"
// to create asynchronous web application

// With AJAX , web application  can send and retrive data  from a ynshronouslu (in the background)
// without interfering with the display and beaviour of the existing page

// We don't use data in XML fromat anymore
// We use JSON now

// WE HAVE 3 MOST COMMON WAY TO CREATE AND SEND REQUEST TO SERVER
// 1.) XMLHttpRequest (OLD WAY OF DOING )
// 2.)FETCH API (NEW WAY OF DOING )
// 3.) AXIOS (THIS IS THIRD PARTY LIBRARY )

// XhR ==> MML http request
// console.log("hello")
// Now we are going to take request to server to get something
// const URL = "https://jsonplaceholder.typicode.com/posts";
// // this is a urlto take request from server also called as api's
// // we will use open method and it's take lehga /
// const XhR1 = new XMLHttpRequest();
// // console.log(XhR1.readyState) s
// XhR1.open("GET" , URL);
// // console.log(XhR1.readyState)
// // XhR1.onreadystatechange = function(){
// //     // console.log(XhR1.response)
// //     // console.log(typeof XhR1.response)
// //     // // finally we can takes request from server using respone keyword
// //     // // but when i checked the typeof it is giving a string but i want to change in js objects
// //     // // how can change  watch   below
// //     // if (XhR1.response) {
// //     //     const respone = XhR1.response;
// //     //     const data = JSON.parse(respone)
// //     //     console.log(typeof  data)
// //     // }

// // }

// // onload tabhi chalega tab uski readyState = 4 hogi
// XhR1.onload = function(){
//     console.log(XhR1.readyState);
// }
// XhR1.send();

// let's get practic and error handling fix
//  const URL = "https://jsonplaceholder.typicode.com/posts/100";
// const xhr = new XMLHttpRequest();
// xhr.open("GET" , URL);
// xhr.onload = ()=>{
//     if (xhr.status >= 200 &&xhr.status <300){
//         const respone = xhr.response;
//         const data = JSON.parse(respone);
//         console.log(data);
//     }else{
//         console.log("Something went wrong ");
//     }
// }

// error handling
// xhr.onerror = ()=>{
//     console.log("Network error ");
// }
// xhr.send();
// const date = new Date();
// console.log(date.getSeconds)

// If you wants to find a particular id in server so we have to do two times request to server
// but if not suffesticated way but just for remembering

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET" , URL);
// xhr.onload = ()=>{
//     if (xhr.status >= 200 &&xhr.status <300){
//         const respone = xhr.response;
//         const data = JSON.parse(respone);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const url2 = `${URL} / ${id}`;
//         xhr2.open("GET" , url2);
//         xhr2.onload = () => {
//             const respone2 = xhr2.response
//             const data2 = JSON.parse(respone2)
//             console.log(data2);
//         }
//         xhr2.send();
//     }else{
//         console.log("Something went wrong ");
//     }
// }
// xhr.send();

// xhr using with promise
const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr  = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something Went wrong"));
            }
        }

        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data)
        return data;
    })
    .then(data=>{
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })