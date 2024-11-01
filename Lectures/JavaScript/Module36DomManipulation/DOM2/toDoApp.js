function loadTodos(){
    const todos=JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};
    console.log(todos);
    return todos;

}
function addTodoToLocalStorage(todoText){
    const todos=loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos",JSON.stringify(todos));

}

function appendTodoInHtml(todoText){
    const todoList=document.getElementById("todoList");
    const todo=document.createElement("li");
    todo.textContent=todoText;
    todoList.appendChild(todo); 

}

document.addEventListener("DOMContentLoaded",()=>{
    const todoInput=document.getElementById("todoInput");
    const submitButton=document.getElementById("addTodo");
    const todoList=document.getElementById("todoList");
    submitButton.addEventListener("click",(event)=>{
        const todoText=todoInput.value;
        if(todoText==''){
            alert("Please write someting for Todo");
        }else
        {
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
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
        const newTodoItem=document.createElement("li");
        newTodoItem.textContent=todo;
        todoList.appendChild(newTodoItem);
        
    });
    
});