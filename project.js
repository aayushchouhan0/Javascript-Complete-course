const addTodo = document.querySelector(".form-todo");
const todoInput =document.querySelector(".form-todo input[type='text']");
const newUl = document.querySelector(".todoListItems");
// console.log(todoInput)
addTodo.addEventListener("submit" , (e)=>{
    e.preventDefault();
   const newTodoInput = todoInput.value;
   const newLi = document.createElement("li");
   const newInnerHtml = ` <span class="edit-text">${newTodoInput}</span>
   <div class="btnitems">
       <button  class="btn-edit done">Done</button>
       <button class="btn-edit remove">Remove</button>
   </div>`
newLi.innerHTML= newInnerHtml;
todoInput.value = "";
newUl.append(newLi);
})
newUl.addEventListener("click" , (e)=>{
   if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through"
   }
   if(e.target.classList.contains("remove")){
    const liSpan = e.target.parentNode.parentNode;
    liSpan.remove();
   }
})


