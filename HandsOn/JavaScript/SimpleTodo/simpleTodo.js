function loadTodos(){
    console.log("load");

}

function appendTodoInHtml(todoText){
    const todoList=document.getElementById("todoList");
    const todo=document.createElement("li");
    todo.textContent=todoText;
    todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded",()=>{
    const todoInput=document.getElementById("todoInput");
    const submitButton=document.getElementById("todobtn");


    submitButton.addEventListener("click",(event)=>{
        const todoText=todoInput.value;
        if (todoText==""){
            alert("Please write something....");
        }
        else{
            appendTodoInHtml(todoText);
            todoInput.value="";
        }

    })
    

    todoInput.addEventListener("change",(event)=>{
        const todoText=event.target.value;
        event.target.value=todoText.trim();
        console.log(event.target.value);
    })

    loadTodos();
});

