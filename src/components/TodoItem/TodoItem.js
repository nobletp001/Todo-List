import React from 'react'
import styles from './TodoItem.style'
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../redux/action";


export default function TodoItem({task}) {
     const dispatch = useDispatch();

    return (
      <div>
        <div style={styles.taskContainer}>
          <div style={styles.taskWrapper}>
            <p style={{...styles.task, textDecoration:task.completed===true?'line-through':'none'}}>{task.text}</p>
            <div style={styles.iconsWrapper}>
              <i
                className="fas fa-check-circle"
                style={styles.completedIcon}
                onClick={() => dispatch(completeTask(task.text))}
              ></i>
              <i
                className="fas fa-trash-alt"
                style={styles.deleteIcon}
                onClick={() => dispatch(deleteTask(task.text))}
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
}
