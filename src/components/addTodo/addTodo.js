import React, {useState} from 'react';
import styles from './addTodo.style.js'
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/action";

export default function AddTodo() {
  const [todo, setTodo] = useState('')
     const dispatch = useDispatch();

  return (
    <div>
      <input
        style={styles.inputField}
        placeholder="Enter Todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button style={styles.submitButton} onClick={()=>{
        dispatch(addTask(todo))
        setTodo('')
        }}>
        add
      </button>
    </div>
  );
}
