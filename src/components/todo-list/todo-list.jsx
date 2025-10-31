import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

function TodoList() {
  return (
    
    <div className='todo-list-container'>
     <TodoItem />
     <TodoItem />
     <TodoItem />
     <TodoItem />
    
   
    </div>
  );
}

export default TodoList;
