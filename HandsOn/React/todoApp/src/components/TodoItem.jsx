import React from 'react'

function TodoItem({todos, onDelete}){
    const items=[];

    for(let i=0;i<todos.length;i++){
        items.push(
            <div className='todo-item' key={i}>
            <span>{todos[i]}</span>
            <button onClick={()=>onDelete(i)}>Delete</button>

            </div>
        );
    }
  return (
    <div>{items}</div>
  )
}

export default TodoItem;