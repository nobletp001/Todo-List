import React from 'react'
import AddTodo from '../components/addTodo/addTodo'
import TodoItem from '../components/TodoItem/TodoItem';
import styles from './main.style.js'
import { useSelector } from "react-redux";

export default function Main() {
    const taskItems = useSelector((state) => state.taskItems);
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <h1 style={styles.title}>Todo List</h1>
          <div style={styles.inputWrapper}>
            <AddTodo />
            <hr style={styles.seperator} />
          </div>

          {taskItems && taskItems.map((task, i)=>{
              return(
  <TodoItem task={task} key={i}/>
              )
          })}
        
        </div>
      </div>
    );
}
