import React from "react";
import styles from "./Tasks.module.css";

function CurrentTask(props) {
  // Funkcja do obsługi kliknięcia przycisku "Usuń"
  const deleteHandler = (taskId, text) => {
    // Wywołanie funkcji przekazanej przez props z ID zadania do usunięcia
    props.onDeleteTaskHandler(taskId, text);
  };

  return (
    <React.Fragment>
      <ul>
        {props.tasks.map((task) => (
          <li
            key={task.id}
            className={styles.taskLiItem}
            onClick={() => deleteHandler(task.id, task.text)}
          >
            <p className={styles.taskItemText}>{task.text}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CurrentTask;
