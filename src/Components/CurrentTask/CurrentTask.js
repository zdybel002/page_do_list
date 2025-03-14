import React from "react";
import styles from "./CurrentTask.module.css";
import Wrapper from "../Wrapper/Wrraper";

function CurrentTask(props) {


  // Funkcja do obsługi kliknięcia przycisku "Usuń"
  const deleteHandler = (taskId,title, text) => {
    // Wywołanie funkcji przekazanej przez props z ID zadania do usunięcia
    props.onDeleteTaskHandler(taskId, text);
  };

  return (
    <React.Fragment>
      <h3 className={styles.main_task_btm}>Your Tasks</h3>
      <ul className={styles.current_list}>
        {props.tasks.map((task) => (
          <Wrapper onClick={() => deleteHandler(task.id)} >
            <li key={task.id} className={styles.taskLiItem} >

                  <h4 className={styles.taskItemText}>{task.title}</h4>
                  <p className={styles.taskItemText}>{task.description}</p>
            </li>
          </Wrapper>
          
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CurrentTask;
