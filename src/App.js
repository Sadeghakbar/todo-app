import './App.css';
import Input from './components/input/input';
import TodoList from './components/todo-list/todo-list';
import {useState} from "react";



function App() {
  const [todoItems, setTodoItems] = useState([]);


  function onDeleteItem(index){
  setTodoItems((prev)=>{
    return prev.filter((item, itemIndex)=>{
      return itemIndex !== index
    })
  })

  }
function onCompeleteItem(index){

}

  function onTaskAdded(taskTitle){
setTodoItems((prev)=>{
  return [...prev, taskTitle]
})
  }
  return (
    
    <div className="App">
      <Input onTaskAdded={onTaskAdded}/>
      <TodoList todoItems={todoItems} onDeleteItem={onDeleteItem} onCompeleteItem={onCompeleteItem}/>
      
      
    </div>
  );
}

export default App;
