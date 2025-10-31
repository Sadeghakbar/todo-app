import './todo-item.css';
import {useState} from "react";


function TodoItem(props) {


const [isCompelete, setIsCompelete] = useState(false);

  function onDeleteItem(){
    props.onDeleteItem(props.index)

  }

  function onCompeleteItem(){
    setIsCompelete(!isCompelete)
  }
  return (
    
    <div className='todo-item' style={{backgroundColor:  isCompelete? "green" : "#F5E5E1"}}>
     <p>{props.title}</p>
     <button className='button x' onClick={onDeleteItem}>x</button>
     <button className='button o' onClick={onCompeleteItem}>o</button>
    </div>
  );
}

export default TodoItem;
