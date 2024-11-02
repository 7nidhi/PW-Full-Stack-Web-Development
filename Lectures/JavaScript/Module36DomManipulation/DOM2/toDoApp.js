function loadTodos(){
    const todos=JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};
    console.log(todos);
    return todos;

}
function addTodoToLocalStorage(todo){
    const todos=loadTodos();
    todos.todoList.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
 function executeFilterAction(event){
    const todoList=document.getElementById("todoList");
    const element=event.target;
    const value=element.getAttribute("data-filter");
    todoList.innerHTML='';
    const todos=loadTodos();
    if(value=="all"){
        console.log(todoList);
        todos.todoList.forEach(todo => {
            appendTodoInHtml(todo);
            
        })
        

    } 
    else if(value=="Pending"){
        todos.todoList.forEach(todo => {
            if(todo.isCompleted!=true)
                appendTodoInHtml(todo);    
        })

    }
    else if(value=="completed"){
        todos.todoList.forEach(todo => {
            if(todo.isCompleted==true)
                appendTodoInHtml(todo);
               
        })

    }

 }

function appendTodoInHtml(todo){
    const todoList=document.getElementById("todoList");
    const todoItem=document.createElement("li");
    const textDiv=document.createElement("div");


    textDiv.textContent=todo.text;
    todoItem.classList.add("todoItem");

    const wrapper=document.createElement("div");
    wrapper.classList.add("todoButtons");



    const editBtn=document.createElement("button");
    editBtn.textContent="Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("deleteBtn");

    const completeBtn=document.createElement("button");
    completeBtn.textContent="Completed";
    completeBtn.classList.add("completeBtn");
 
    
    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completeBtn);

    todoItem.appendChild(textDiv);
    todoItem.appendChild(wrapper);
    
    todoList.appendChild(todoItem); 

}

document.addEventListener("DOMContentLoaded",()=>{
    const todoInput=document.getElementById("todoInput");
    const submitButton=document.getElementById("addTodo");
    const todoList=document.getElementById("todoList");
    const filterBtns=document.getElementsByClassName("filterBtn");
    console.log(filterBtns);
    for(const btn of filterBtns){
        console.log(btn);
        btn.addEventListener("click",executeFilterAction);
    }

    submitButton.addEventListener("click",(event)=>{
        const todoText=todoInput.value;
        if(todoText==''){
            alert("Please write someting for Todo");
        }else
        {
            addTodoToLocalStorage({text:todoText,isCompleted:false});
            appendTodoInHtml({text:todoText,isCompleted:false});
            todoInput.value='';
        }

    });
    todoInput.addEventListener("change",(event)=>{
        //This callback method is fired everytime there is a change in input tag
        const todoText= event.target.value;
        event.target.value=todoText.trim(); //user to trim extra value or table space and print only value
        console.log(event.target.value);
    });
    const todos=loadTodos();
    todos.todoList.forEach(todo => {
        appendTodoInHtml(todo);
        
    });
    
});