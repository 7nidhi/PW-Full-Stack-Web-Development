import React from 'react'
import { useState } from 'react';
import TodoItem from './todoItem';
import "./Todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput]= useState("");

  const addTodo= () =>{
    if(input.trim()==="") return;
    setTodos([...todos,input]);
    setInput("");
  };

  const deleteTodo= (index) =>{
    const updatedTodos=todos.filter((_,i)=> i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-container'>
    <h1>To-Do App</h1>
    <div className='input-box'>
    <input type='text' value={input} placeholder='Enter the To-Do...' 
    onChange={(e) =>{setInput(e.target.value)}}></input>
    <button onClick={addTodo}>Add</button>
    </div>
    <TodoItem todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default TodoApp;