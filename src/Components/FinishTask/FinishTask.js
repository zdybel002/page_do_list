import React from "react";

import styles from "./FinishTask.module.css";
import Wrapper from "../../Components/Wrapper/Wrraper"

function CurrentTask(props) {
  // Funkcja do obsługi kliknięcia przycisku "Usuń"
  const deleteHandler = (taskId, text) => {
    // Wywołanie funkcji przekazanej przez props z ID zadania do usunięcia
    props.onDeleteTaskHandler(taskId, text);
  };

  return (
    <React.Fragment>
          <ul className={styles.finish_list}>
          {props.tasks.map((task) => (
          <Wrapper onClick={() => deleteHandler(task.id)} >
              <li key={task.id}>
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

