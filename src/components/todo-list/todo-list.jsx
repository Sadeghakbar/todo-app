import { useState } from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

function TodoList(props) {

  function onDeleteItem(index){
    props.onDeleteItem(index)
  }
function onCompeleteItem(){

}
  return (
    
    <div className='todo-list-container'>
      {props.todoItems.map((title, index)=> {
        return <TodoItem index={index} key={index} title={title} onDeleteItem={onDeleteItem} onCompeleteItem={onCompeleteItem}/>
      })}
    </div>
  );
}

export default TodoList;
