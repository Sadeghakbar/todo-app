import {useState, useRef} from "react";
import './input.css';

function Input(props) {

    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef();

    function onInputChange(event){
        setInputValue(event.target.value)
        
    }

    function onButtonClick(){
    props.onTaskAdded(inputValue)
    inputElement.current.value = "";

    }

    function onEnterPressed(event){
        if (event.code === "Enter"){
            onButtonClick()
        }
    }

  return (
    
    <div className='input-container'>
      <input className='input' placeholder='Add Your Task' onChange={onInputChange} ref={inputElement} onKeyDown={onEnterPressed} />
      <button className='submit' onClick={onButtonClick} >Add</button>

      
    </div>
  );
}

export default Input;
