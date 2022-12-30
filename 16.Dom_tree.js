// // // 1.DOM tree 
// // // 2.Travserl of tree
// // const rootNode = document.getRootNode();
// // console.log(rootNode.childNodes);
// // const htmlElement = rootNode.childNodes[1];
// // console.log(htmlElement.childNodes)
// // // In this section i am taking head root child 
// // const toGetHeadSection = htmlElement.childNodes[0];
// // console.log(toGetHeadSection.childNodes[0])
// // console.log(toGetHeadSection.childNodes[1])
// // console.log(toGetHeadSection.childNodes[2])
// // console.log(toGetHeadSection.childNodes[3])
// // console.log(toGetHeadSection.childNodes[4])
// // console.log(toGetHeadSection.childNodes[5])
// // console.log(toGetHeadSection.childNodes[6])
// // console.log(toGetHeadSection.childNodes[7])
// // console.log(toGetHeadSection.childNodes[8])
// // console.log(toGetHeadSection.childNodes[9])
// // console.log(toGetHeadSection.childNodes[10])

// // // next i'm taking body section 
// // const toGetBodySection  = htmlElement.childNodes[2];
// // console.log(toGetBodySection.childNodes)
// // // To asseccing the div container child elemrnts 

// // const toGetDivConatiner = toGetBodySection.childNodes[1];
// // console.log(toGetDivConatiner.childNodes);

// // const toSeeH1 = toGetDivConatiner.childNodes[1];
// // console.log(toSeeH1)

// // // for (let i = 0; i < toGetDivConatiner.length; i++) {
// // //     console.log(toGetDivConatiner.childNodes[i]);
    
// // // }



// const root = document.getRootNode();
// console.log(root.childNodes)
// const html  = root.childNodes[1];
// console.log(html.childNodes);
// const head = html.childNodes[0];
// console.log(head.nextSibling.nextSibling)
// console.log(head.parentNode.parentNode)
// console.log(head.nextElementSibling)
// // In js you have doubt why come text , if we are not writing anything beacuse new line and space alsocount as a text 
// // so that'swhy print text if  don't want to show we can'nt gave any space and new line so there will not show 


// // There is a task using child elemnt to go parent and also do style of elements 
// const h1 = document.querySelector("h1")
// const div = h1.parentNode.parentNode;
// div.style.color = "white";
// div.style.backgroundColor = "grey";


// // using head do something 
// const head1 = document.querySelector("head")
// const title = head1.querySelector("title")
// console.log(title.childNodes)


// // using my class do  something 
// const container = document.querySelector(".conatiner")
// // if you want not see any text we can use this children 
// console.log(container.children)



// 3. classlist , add and remove , toggle classes
// classlist = property show many classes given in html file they will give us 
// const class1 = document.querySelector(".todo ");
// console.log(class1.classList)
// Using javascript we give class to html element 
// class1.classList.add("bg-dark")/
// class1.classList.remove("bg-dark");

// contain check the any class exixt or not  andr eturn true and false type 
// const anss = class1.classList.contains("container");
// console.log(anss);/

// toggle class check if class availiabl in bg-dark then it will remove , if no present class of bg-dark 
// then it will put 
// class1.classList.toggle("bg-dark");/
// class1.classList.toggle("bg-dark"); 


// How create a html element with the help of js 
// we know that we another option inner html we can html elemnets /
// const elements =document.querySelector(".todoListItems");/
// Now we want change elements using inner html 
// console.log(elements.innerHTML);
// elements.innerHTML += "<li>How are students</li>" + "<li>I hope you doing great </li>" 

// When you should use it , when you should not 
// We used not use to add new elemnets beacuse it's give performance issues , when we add a new html elements the code again rendered 
// and takes more time 

// We should use it when want only text changes  for that reason you can use inner html elements 



// We have an very good way to create new elements 
// Append add in  last 
// const newTodoList= document.createElement("li");
// newTodoList.textContent= "teach student";
// const todolistForClass = document.querySelector(".todoListItems");
// todolistForClass.append(newTodoList);
// console.log(newTodoList)


// prepaid add in starting 
// todolistForClass.prepend(newTodoList)


//  remove from list
// const todolistForClass = document.querySelector(".todoListItems li");
// todolistForClass.remove();
// console.log(todolistForClass);

// There are two more methods 
// 1.before = print between before ul  and after section 
// const newTodoList= document.createElement("li");
// newTodoList.textContent= "teach student";
//  const todolistForClass = document.querySelector(".todoListItems");
// //  todolistForClass.before(newTodoList)

// // 2. after --> Print after ul 
// todolistForClass.after(newTodoList)



// Some more new method 
//   const todolistForClass = document.querySelector(".todoListItems");
//   todolistForClass.insertAdjacentHTML("beforeend" , "<li>Kasie ho bhai log </li>") it works like  an append 
//   todolistForClass.insertAdjacentHTML("afterbegin" , "<li>Kasie ho bhai log </li>")  it works  like an prepend  
//   todolistForClass.insertAdjacentHTML("beforebegin" , "<li>Kasie ho bhai log </li>")  it's work like before begin 
//   todolistForClass.insertAdjacentHTML("afterend" , "<li>Kasie ho bhai log </li>")    it's work like after



// Clone nodes 
// clone means to makes copy to another elements 
// const ul = document.querySelector(".todoListItems");
// const li = document.createElement("li");
// li.textContent = "fucking man ";
// const li2 =  li.cloneNode(true)
// ul.append(li)
// // ul.prepend(li)
// ul.prepend(li2)


// Some very old methods to support poor internet explore 

// const newTarget = document.querySelector(".todoListItems")
// const newLi = document.createElement("li");
// newLi.textContent = "Hello";
// const reference  = document.querySelector(".todoListItems li");
// console.log(reference)
// // newTarget.appendChild(newLi)
// // newTarget.insertBefore(newLi , reference)
// // newTarget.replaceChild(newLi , reference)
// newTarget.removeChild(reference);


// Very important topis 
// static list and live list 

// Jo querySelector hota hain voh humesa node list deta hain and voh static list type ka hota hain 
// Jo getByElementSomething hota hain voh humesa HTMLCollection hota hain or voh live list hain 
// let preUl = document.querySelector(".todoListItems");
// // const second = document.querySelectorAll(".todoListItems li")
// const elements = document.getElementsByClassName("navItems")
// const sixth = document.createElement("li");
// sixth.textContent = "Items 6";
// preUl.append(sixth);
// console.log(elements)



// How to get dimension  of html elements 
// We can find using height ,width and anymore 
const todoSelection  =document.querySelector(".todo");
// const info = todoSelection.getBoundingClientRect();s
// you want find a particular things do like that 
const info = todoSelection.getBoundingClientRect().height
// console.log(info)
